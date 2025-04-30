import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://apfiffumgiyibwoihwqc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZmlmZnVtZ2l5aWJ3b2lod3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMjIyNzgsImV4cCI6MjA1ODg5ODI3OH0.dzz3OhYj6Ev-1w8NgMtTmFYWb3LU7FoD8YeXsfuoKHs"
);

export async function getProductSales() {
  let { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching Sales products:", error);
    return [];
  }

  return data;
}

export async function getProductMen() {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "مردانه");

  if (error) {
    console.error("Error fetching digital products:", error);
    return [];
  }

  return data;
}

export async function getProductWomen() {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "زنانه");

  if (error) {
    console.error("Error fetching digital products:", error);
    return [];
  }

  return data;
}

export async function getProductDigital() {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "دیجیتال");

  if (error) {
    console.error("Error fetching digital products:", error);
    return [];
  }

  return data;
}

export async function getProductHealth() {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "سلامت و زیبایی");

  if (error) {
    console.error("Error fetching digital products:", error);
    return [];
  }

  return data;
}

export async function getProduct(id) {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    return null;
  }

  return data;
}
