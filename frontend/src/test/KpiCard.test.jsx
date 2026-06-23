import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import KpiCard from "../components/KpiCard";

describe("KpiCard Component", () => {
  it("renders Monthly Revenue KPI", () => {
    render(
      <KpiCard
        title="Monthly Revenue"
        value="₱39,000"
        subtitle="+9%"
      />
    );

    expect(screen.getByText("Monthly Revenue")).toBeInTheDocument();
    expect(screen.getByText("₱39,000")).toBeInTheDocument();
    expect(screen.getByText("+9%")).toBeInTheDocument();
  });

  it("renders Occupancy Rate KPI", () => {
    render(
      <KpiCard
        title="Occupancy Rate"
        value="50%"
        subtitle="+5%"
      />
    );

    expect(screen.getByText("Occupancy Rate")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("+5%")).toBeInTheDocument();
  });

  it("renders Active Tenants KPI", () => {
    render(
      <KpiCard
        title="Active Tenants"
        value="10"
        subtitle="Current"
      />
    );

    expect(screen.getByText("Active Tenants")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Current")).toBeInTheDocument();
  });

  it("renders Late Payments KPI", () => {
    render(
      <KpiCard
        title="Late Payments"
        value="2"
        subtitle="-1"
      />
    );

    expect(screen.getByText("Late Payments")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});