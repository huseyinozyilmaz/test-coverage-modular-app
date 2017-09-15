package org.huseyin;

import org.huseyin.util.*;

/**
 * Created by huseyin on 14/09/2017.
 */
public class Calculator {

    public int add (int x, int y) {
        return x+y;
    }

    public void print() {
        System.out.println("Calculator: " + DateUtil.getToday());
    }
}
