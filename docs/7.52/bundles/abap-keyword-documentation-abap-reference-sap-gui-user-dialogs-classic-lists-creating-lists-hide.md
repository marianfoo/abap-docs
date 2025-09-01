# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Classic Lists / Creating Lists / HIDE

Included pages: 2


### abaphide.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Creating Lists](javascript:call_link\('abenabap_lists.htm'\)) → 

HIDE

[Quick Reference](javascript:call_link\('abaphide_shortref.htm'\))

Syntax

HIDE dobj.

Effect

This statement stores the content of a variable dobj together with the current list line whose line number is contained in sy-linno in the [hide area](javascript:call_link\('abenhide_area_glosry.htm'\) "Glossary Entry") of the current list level. The data type of the variable dobj must be [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") and no field symbols or components of [Boxed Components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") can be specified that point to rows of internal tables, and no class attributes can be specified. The saved values can be read as followed:

-   Any user action on a displayed screen list that causes a list event assigns all values saved using HIDE to the relevant variables.
    
-   If a list line of a list level is read or modified using the statements [READ LINE](javascript:call_link\('abapread_line.htm'\)) or [MODIFY LINE](javascript:call_link\('abapmodify_line.htm'\)), all the values of this line saved using HIDE are assigned to the relevant variables.
    

Notes

-   The HIDE statement works independently of whether the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") was set. In particular, variables for empty list lines can be stored (that is, lines in which the list cursor was positioned using statements like [SKIP](javascript:call_link\('abapskip.htm'\))).
    
-   The HIDE statement should be executed directly in the statement that has set the list cursor in the line.
    
-   Using the HIDE statement on a field symbol can cause runtime errors. The syntax check displays a warning.
    

Example

Saving square numbers and cubic numbers for a list of numbers. The example shows that any variable can be stored independently of the line content. In the real world, one would more likely save only the number and execute the calculation, when required, in the the event block for [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)).

REPORT ...
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

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The field is too long for HIDE.
    Runtime error: HIDE\_FIELD\_TOO\_LARGE
    
-   Cause: HIDE in a table row or a component in a table row is not possible.
    Runtime error: HIDE\_ILLEGAL\_ITAB\_SYMBOL
    
-   Cause: HIDE in a local field is not possible.
    Runtime error: HIDE\_NO\_LOCAL: HIDE
    
-   Cause: HIDE is not possible on an empty page.
    Runtime error: HIDE\_ON\_EMPTY\_PAGE
    
-   Cause: Illegal field
    Runtime error: HIDE\_NOT\_GLOBAL
    
-   Cause: Permitted number of HIDE statements per list line exceeded
    Runtime error: HIDE\_TOO\_MANY\_HIDES
    

Continue
![Example](exa.gif "Example") [Lists, HIDE Technique](javascript:call_link\('abenlist_hide_abexa.htm'\))


### abenlist_hide_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Creating Lists](javascript:call_link\('abenabap_lists.htm'\)) →  [HIDE](javascript:call_link\('abaphide.htm'\)) → 

Lists, HIDE Technique

The example shows how to implement a program-controlled data transfer of lists to the ABAP program using HIDE.

Source Code

REPORT demo\_list\_hide NO STANDARD PAGE HEADING.
TABLES: spfli, sbook.
DATA: num TYPE i,
      dat TYPE d.
START-OF-SELECTION.
  num = 0.
  SET PF-STATUS 'FLIGHT'.
GET spfli.
  num = num + 1.
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

At the event START-OF-SELECTION, the status FLIGHT is set for the basic list. In the status FLIGHT, the function key F2 and a pushbutton have been assigned the function code SELE (text SELECT). As a result, the user actions of double-clicking and choosing F2 or the pushbutton SELECT trigger the event AT USER-COMMAND.

The three fields spfli-carrid, spfli-connid, and num are written to the [Hide area](javascript:call_link\('abenhide_area_glosry.htm'\) "Glossary Entry") while the basic list is created. After a line is selected, the details list defined for the function code SELE in AT USER-COMMAND is displayed. At the event AT USER-COMMAND, all stored Hide fields of the selected line are reloaded. num is used to check if a line of the actual list has been selected. The details list gets the status BOOKING where F2 is assigned the function code INFO (text: Booking Information). The details list displays data which can be selected using the Hide fields of the basic list. For each list line output, the system stores additional information in the [Hide area](javascript:call_link\('abenhide_area_glosry.htm'\) "Glossary Entry").

Selecting a line on the details list displays the information stored in a dialog box with the status WIND. For the status WIND, the default settings have been adopted with comparison for the list status. sbook-bookid checks whether the line selection is valid.

All page headers and the title bar of the dialog box are set in the program.
