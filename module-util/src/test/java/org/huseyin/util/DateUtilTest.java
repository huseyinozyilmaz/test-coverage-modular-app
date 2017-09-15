package org.huseyin.util;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by huseyin on 15/09/2017.
 */
public class DateUtilTest {
    @Test
    public void testGetToday() {
        String actual = DateUtil.getToday();
        String expected = new SimpleDateFormat("dd-MMM-yyyy")
                .format(new Date());
        assertEquals(expected, actual);
    }
}
