# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / Classic Lists / Lists - Create / HIDE

Included pages: 2


### abaphide.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists.htm) → 

HIDE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphide_shortref.htm)

Syntax

HIDE dobj.

Effect

This statement stores the content of a variable dobj together with the current list line whose line number is contained in sy-linno in the [hide area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhide_area_glosry.htm "Glossary Entry") of the current list level. The data type of the variable dobj must be [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_glosry.htm "Glossary Entry") and no field symbols or components of [boxed components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenboxed_component_glosry.htm "Glossary Entry") can be specified that point to lines of internal tables, and no class attributes can be specified. The stored values can be read again as follows:

-   Any user action on a displayed screen list that causes a list event assigns all values saved using HIDE to the relevant variables.
-   If a list line of a list level is read or modified using the statements [READ LINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line.htm) or [MODIFY LINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line.htm), all values of this line stored using HIDE are assigned to the relevant variables.

Hints

-   The HIDE statement works independently of how the [list cursor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_cursor_glosry.htm "Glossary Entry") was set. In particular, variables can also be stored for empty list lines, that is, lines in which the list cursor was positioned using statements like [SKIP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapskip.htm).
-   The HIDE statement should be executed directly in the statement that has set the list cursor in the line.
-   Using the HIDE statement on a field symbol can cause runtime errors. The syntax check creates a warning.

Example

Saving square numbers and cubic numbers for a list of numbers. The example shows that any variable can be stored independently of the line content. In the real world, one would more likely save only the number and execute the calculation, when required, in the event block for [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapat_line-selection.htm).

DATA: square TYPE i,
      cube   TYPE i.
START-OF-SELECTION.
  FORMAT HOTSPOT.
  DO 10 TIMES.
    square = sy-index \*\* 2.
    cube   = sy-index \*\* 3.
    WRITE / sy-index.
    HIDE: square, cube.
  ENDDO.
AT LINE-SELECTION.
  WRITE: square, cube.

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The field is too long for HIDE.
    Runtime error: HIDE\_FIELD\_TOO\_LARGE
-   Cause: HIDE in a table line or a component in a table line is not possible.
    Runtime error: HIDE\_ILLEGAL\_ITAB\_SYMBOL
-   Cause: HIDE in a local field is not possible.
    Runtime error: HIDE\_NO\_LOCAL
-   Cause: HIDE is not possible on an empty page.
    Runtime error: HIDE\_ON\_EMPTY\_PAGE
-   Cause: Illegal field
    Runtime error: HIDE\_NOT\_GLOBAL
-   Cause: Permitted number of HIDE statements per list line exceeded
    Runtime error: HIDE\_TOO\_MANY\_HIDES

Continue
![Example](exa.gif "Example") [Lists - HIDE Technology](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_hide_abexa.htm)


### abenlist_hide_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists.htm) →  [HIDE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphide.htm) → 

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

The three fields spfli-carrid, spfli-connid, and num are written to the [Hide](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhide_area_glosry.htm "Glossary Entry") area while the basic list is created. After a line is selected, the details list defined for the function code SELE in AT USER-COMMAND is displayed. After the AT USER-COMMAND event, all fields of the selected line that were stored in the Hide area are loaded again. num is used to check whether a line from the actual list was selected. The details list is given the status BOOKING, where F2 is assigned the function code INFO (with the text Booking Information) The details list displays data which can be selected using the Hide fields of the basic list. For each list line that is output, the system stores additional information in the [Hide](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhide_area_glosry.htm "Glossary Entry") area.

If the user selects a line of the details list, the system displays the stored information in a dialog box with the status WIND. For the WIND status, the default values are applied when the list status is synchronized. sbook-bookid is used to check whether a valid line was selected.

The program itself sets all page headers and the title bar of the dialog box.
