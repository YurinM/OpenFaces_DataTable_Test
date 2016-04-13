package com.openfaces.table.test;

import java.io.Serializable;

/**
 * Created by sergey.pensov on 04.04.2016.
 */
public class Color implements Serializable {
    private String name;
    private int r;
    private int g;
    private int b;
    private String hex;

    public Color(String name, int r, int g, int b, String hex) {
        this.name = name;
        this.r = r;
        this.g = g;
        this.b = b;
        this.hex = hex;
    }

    public int getR() {
        return r;
    }

    public int getG() {
        return g;
    }

    public int getB() {
        return b;
    }

    public String getHex() {
        return hex;
    }

    public String getName() {
        return name;
    }

}
