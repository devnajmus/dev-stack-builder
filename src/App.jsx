import React from "react";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { X, LoaderCircle, ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";
import Footer from "./Footer";
const information = {
  About:
    "Dev Stack helps you explore development tools and put together a technology stack. Read the cards, choose tools that fit your project, and remove any you no longer need. You can select more than one technology in each category.",
  Projects:
    "Planning a portfolio? Try React, JavaScript, and Tailwind CSS. For a full-stack application, consider Next.js, Node.js, and PostgreSQL. Use the technology cards to put together your own combination.",
  Contact:
    "For questions about the assignment, visit the Programming Hero reference repository or join your course support session.",
  "Sign In":
    "This assignment demo does not include accounts. You can explore all technologies and build your stack without signing in.",
  "Sign Up":
    "No account is needed to start building. Account registration is not connected in this assignment demo.",
  "Privacy Policy":
    "Your selected stack stays in memory in this browser tab and resets when the page reloads. This app does not collect account details. Technology icons load from jsDelivr, and the hosting provider may process normal request logs.",
  "Terms of Service":
    "Dev Stack is an educational project. Technology descriptions and sample ratings help demonstrate the interface; ratings are illustrative, not verified reviews. Evaluate tools against your own project requirements.",
};
export default function App() {
  const [technologies, setTechnologies] = useState([]),
    [stack, setStack] = useState([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [reload, setReload] = useState(0),
    [info, setInfo] = useState(null);
  const dialog = useRef(null),
    selected = useRef([]);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    fetch("/technologies.json", { signal: controller.signal })
      .then((res) => {
        if (!res.ok)
          throw new Error("Unable to load technologies. Please try again.");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data))
          throw new Error("Technology data is unavailable.");
        setTechnologies(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [reload]);
  useEffect(() => {
    if (info) dialog.current?.showModal();
    else dialog.current?.close();
  }, [info]);
  function add(tech) {
    if (selected.current.some((item) => item.id === tech.id)) {
      toast.warning(tech.name + " is already in your stack.");
      return;
    }
    selected.current = [...selected.current, tech];
    setStack(selected.current);
    toast.success(tech.name + " added to your stack.");
  }
  function remove(id) {
    const tech = selected.current.find((item) => item.id === id);
    selected.current = selected.current.filter((item) => item.id !== id);
    setStack(selected.current);
    if (tech) toast.info(tech.name + " removed from your stack.");
  }
  function clear() {
    if (!selected.current.length) return;
    selected.current = [];
    setStack([]);
    toast.info("Your stack has been cleared.");
  }
  return (
    <div id="home">
      <a className="skip-link" href="#technologies">
        Skip to technologies
      </a>
      <Navbar onInfo={setInfo} />
      <main>
        <Hero onInfo={setInfo} />
        <section id="technologies" className="catalog">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">THE BUILDING BLOCKS</div>
                <h2>
                  Explore the{" "}
                  <span className="gradient-text">Technologies</span>
                </h2>
                <p>Find the right tools. Make them your own.</p>
              </div>
              <span className="catalog-count">
                {technologies.length} technologies to explore
              </span>
            </div>
            <div className="workspace">
              <div>
                {loading ? (
                  <div className="status" role="status">
                    <LoaderCircle className="spin" /> Loading technologies…
                  </div>
                ) : error ? (
                  <div className="status" role="alert">
                    <p>{error}</p>
                    <button
                      className="outline"
                      onClick={() => setReload(reload + 1)}
                    >
                      Try again
                    </button>
                  </div>
                ) : (
                  <div className="technology-grid">
                    {technologies.map((tech) => (
                      <TechnologyCard
                        key={tech.id}
                        tech={tech}
                        added={stack.some((item) => item.id === tech.id)}
                        onAdd={add}
                      />
                    ))}
                  </div>
                )}
              </div>
              <StackPanel stack={stack} onRemove={remove} onClear={clear} />
            </div>
            <p className="catalog-note">
              Built for curiosity. Choose what works for you.
            </p>
          </div>
        </section>
      </main>
      <Footer onInfo={setInfo} />
      <dialog
        ref={dialog}
        onCancel={() => setInfo(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setInfo(null);
        }}
        aria-labelledby="dialog-title"
      >
        <button
          className="dialog-close icon-button"
          aria-label="Close dialog"
          onClick={() => setInfo(null)}
        >
          <X />
        </button>
        <div className="eyebrow">DEV STACK</div>
        <h2 id="dialog-title">{info}</h2>
        <p>{information[info]}</p>
        {info === "Contact" ? (
          <a
            className="primary"
            href="https://github.com/ProgrammingHero1/B14-A05-DevStack"
            target="_blank"
            rel="noreferrer"
          >
            Reference repository <ArrowUpRight size={17} />
          </a>
        ) : (
          <button className="primary" onClick={() => setInfo(null)}>
            Continue exploring
          </button>
        )}
      </dialog>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        theme="light"
      />
    </div>
  );
}

