  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) →  [HIDE](javascript:call_link\('abaphide.htm'\)) → 

Lists - HIDE Technology

This example demonstrates how to implement program-driven data passes for lists to the ABAP program using HIDE.

Source Code

REPORT demo\_list\_hide NO STANDARD PAGE HEADING.
TABLES: spfli, sbook.
DATA: num TYPE i,
      dat TYPE d.
START-OF-SELECTION.
  num = 0.
  SET PF-STATUS 'FLIGHT'.
GET spfli.
  num += 1.
  WRITE: / spfli-carrid, spfli-connid,
           spfli-cityfrom, spfli-cityto.
  HIDE:    spfli-carrid, spfli-connid, num.
END-OF-SELECTION.
  CLEAR num.
TOP-OF-PAGE.
  WRITE 'List of Flights'.
  ULINE.
  WRITE 'CA  CONN FROM                 TO'.
  ULINE.
TOP-OF-PAGE DURING LINE-SELECTION.
  CASE sy-pfkey.
    WHEN 'BOOKING'.
      WRITE sy-lisel.
      ULINE.
    WHEN 'WIND'.
      WRITE:  'Booking', sbook-bookid,
           /  'Date   ', sbook-fldate.
      ULINE.
  ENDCASE.
AT USER-COMMAND.
  CASE sy-ucomm.
    WHEN 'SELE'.
      IF num NE 0.
        SET PF-STATUS 'BOOKING'.
        CLEAR dat.
        SELECT \* FROM sbook WHERE carrid = spfli-carrid
                            AND   connid = spfli-connid.
          IF sbook-fldate NE dat.
            dat = sbook-fldate.
            SKIP.
            WRITE / sbook-fldate.
            POSITION 16.
          ELSE.
            NEW-LINE.
            POSITION 16.
          ENDIF.
          WRITE sbook-bookid.
          HIDE: sbook-bookid, sbook-fldate, sbook-custtype,
                sbook-smoker, sbook-luggweight, sbook-class.
        ENDSELECT.
        IF sy-subrc NE 0.
          WRITE / 'No bookings for this flight'.
        ENDIF.
        num = 0.
        CLEAR sbook-bookid.
      ENDIF.
    WHEN 'INFO'.
      IF NOT sbook-bookid IS INITIAL.
        SET PF-STATUS 'WIND'.
        SET TITLEBAR 'BKI'.
        WINDOW STARTING AT 30 5 ENDING AT  60 10.
        WRITE: 'Customer type   :', sbook-custtype,
             / 'Smoker          :', sbook-smoker,
             / 'Luggage weigtht :', sbook-luggweight UNIT 'KG',
             / 'Class           :', sbook-class.
      ENDIF.
  ENDCASE.

Description

At the event START-OF-SELECTION, the status FLIGHT is set for the basic list. In the status FLIGHT, the function key F2 and a pushbutton are assigned the function code SELE (text SELECT). This means the event AT USER-COMMAND is raised when the user double-clicks, presses F2, or chooses the pushbutton SELECT.

The three fields spfli-carrid, spfli-connid, and num are written to the [Hide](javascript:call_link\('abenhide_area_glosry.htm'\) "Glossary Entry") area while the basic list is created. After a line is selected, the details list defined for the function code SELE in AT USER-COMMAND is displayed. After the AT USER-COMMAND event, all fields of the selected line that were stored in the Hide area are loaded again. num is used to check whether a line from the actual list was selected. The details list is given the status BOOKING, where F2 is assigned the function code INFO (with the text Booking Information) The details list displays data which can be selected using the Hide fields of the basic list. For each list line that is output, the system stores additional information in the [Hide](javascript:call_link\('abenhide_area_glosry.htm'\) "Glossary Entry") area.

If the user selects a line of the details list, the system displays the stored information in a dialog box with the status WIND. For the WIND status, the default values are applied when the list status is synchronized. sbook-bookid is used to check whether a valid line was selected.

The program itself sets all page headers and the title bar of the dialog box.