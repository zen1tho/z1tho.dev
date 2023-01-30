import { Component, createSignal, For } from "solid-js";
import { useNavigate } from "solid-start";
import styles from "./NavBar.module.scss";

const NavBar: Component = (props) => {
  const routes = ["About", "Project"];
  const [activeRoutes, setActiveRoutes] = createSignal([] as string[]);
  const navigate = useNavigate();
  function filterRoutes(input: string) {
    return routes.filter((route: string) => {
      if (route.toLowerCase() === input.toLowerCase()) {
        return false;
      }
      return route.toLowerCase().includes(input.toLowerCase());
    });
  }
  return (
    <div class={styles.NavBar}>
      <div style={{ display: "flex", "flex-direction": "row", width: "100%" }}>
        ~/
        <div>
          <input
            class={styles.Input}
            onInput={(e) =>
              setActiveRoutes(filterRoutes(e.currentTarget.value))
            }
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                e.preventDefault();
                if (activeRoutes().length === 1) {
                  e.currentTarget.value = activeRoutes()[0];
                }
              } else if (e.key === "Enter") {
                navigate(`${e.currentTarget.value}`, { replace: true });
              }
            }}
            onClick={(e) =>
              setActiveRoutes(filterRoutes(e.currentTarget.value))
            }
          ></input>

          <ul>
            <For each={activeRoutes()}>{(route, i) => <li>{route}</li>}</For>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
