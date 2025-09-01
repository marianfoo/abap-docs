---
title: "Dynpros, HTML Browser"
description: |
  This example demonstrates the encapsulation of the browser controls in a class. Source Code REPORT demo_html_browser. PARAMETERS: modal  AS CHECKBOX DEFAULT 'X', no_box AS CHECKBOX. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. TYPES: pict_line(1022) TYPE x, pict_t
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhtml_browser_abexa.htm"
abapFile: "abenhtml_browser_abexa.htm"
keywords: ["select", "insert", "loop", "do", "if", "case", "method", "class", "data", "types", "abenhtml", "browser", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [Screen and Screen Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_screen.htm) →  [Screen Elements - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_elements_abexas.htm) → 

Dynpros, HTML Browser

This example demonstrates the encapsulation of the browser controls in a class.

Source Code

REPORT demo\_html\_browser.
PARAMETERS: modal  AS CHECKBOX DEFAULT 'X',
            no\_box AS CHECKBOX.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES: pict\_line(1022) TYPE x,
           pict\_tab        TYPE STANDARD TABLE OF pict\_line
                                WITH EMPTY KEY.
    CLASS-METHODS get\_pict\_tab
      IMPORTING
        mime\_url        TYPE csequence
      RETURNING
        VALUE(pict\_tab) TYPE pict\_tab.
    CLASS-METHODS handle\_sapevent
      FOR EVENT sapevent
                  OF cl\_abap\_browser
      IMPORTING action.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA error\_list TYPE cl\_abap\_browser=>html\_table.
    DATA(title) = CONV cl\_abap\_browser=>title( 'HTML Browser Demo' ).
    SET HANDLER handle\_sapevent.
    DATA(pict\_tab) = get\_pict\_tab(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).
    DATA(ext\_data) =
      VALUE cl\_abap\_browser=>load\_tab( ( name = 'PICT.GIF'
                                         type = 'image'
                                         dref = REF #( pict\_tab ) ) ).
    DATA(html\_str) =
      '<htm1 lang="EN">' &&
      '<head>' &&
      '<meta name="Demo" content="Test">' &&
      '<style type="text/css">' &&
      'span.h1 {font-size: 150%; color:#000080; ' &&
      'font-weight:bold;}' &&
      '</style>' &&
      '</head>' &&
      '<body>' &&
      '<p><span class="h1">HTML</span></p>' &&
      '<A HREF="http://help.sap.com/">Weblink</A>' &&
      '<br><br><A href=sapevent:"ActionCode">SAPevent</A>' &&
      '<br><br>External Picture:' &&
      '<br><br><img src="PICT.GIF" alt="An example figure" >' &&
      '</body>' &&
      '</html>'.
    cl\_abap\_browser=>show\_html(
      EXPORTING
        html\_string = html\_str
        modal       = modal
        dialog      = COND #( WHEN no\_box = abap\_false
                                   THEN abap\_true )
        title       = title
        buttons     = cl\_abap\_browser=>navigate\_html
        format      = cl\_abap\_browser=>landscape
        size        = cl\_abap\_browser=>medium
        data\_table  = ext\_data
      IMPORTING
         html\_errors = error\_list ).
    IF modal IS INITIAL AND no\_box IS INITIAL.
      MESSAGE 'First call of browser' TYPE 'I'.
    ENDIF.
    IF error\_list IS NOT INITIAL.
      LOOP AT error\_list ASSIGNING FIELD-SYMBOL(<error>).
        <error> = escape( val    = <error>
                          format = cl\_abap\_format=>e\_html\_text ).
        <error> = <error> && '<br>'.
      ENDLOOP.
      INSERT '<html><body>' INTO error\_list INDEX 1.
      APPEND '</body></html>' TO error\_list.
      cl\_abap\_browser=>show\_html(
        EXPORTING
          html       = error\_list
          modal       = modal
          dialog      = COND #( WHEN no\_box = abap\_false
                                     THEN abap\_true )
          title      = 'HTML Validation Errors'
          check\_html = abap\_false
          printing   = abap\_true ).
      IF modal IS INITIAL AND no\_box IS INITIAL.
        MESSAGE 'Second call of browser' TYPE 'I'.
      ENDIF.
    ENDIF.
    REPLACE '<htm1'  IN html\_str WITH  '<html'.
    cl\_abap\_browser=>show\_html(
      EXPORTING
        html\_string = html\_str
        modal       = modal
        dialog      = COND #( WHEN no\_box = abap\_false
                                   THEN abap\_true )
        title      = title
        buttons    = cl\_abap\_browser=>navigate\_html
        format     = cl\_abap\_browser=>landscape
        size       = cl\_abap\_browser=>medium
        data\_table = ext\_data
        check\_html = abap\_true
      IMPORTING
         html\_errors = error\_list ).
    IF modal IS INITIAL AND no\_box IS INITIAL.
      MESSAGE 'Third call of browser' TYPE 'I'.
    ENDIF.
    IF error\_list IS INITIAL.
      MESSAGE 'No errors in HTML' TYPE 'S'.
    ENDIF.  ENDMETHOD.
  METHOD handle\_sapevent.
    MESSAGE \`Handling: \` && action TYPE 'I'.
  ENDMETHOD.
  METHOD get\_pict\_tab.
    cl\_mime\_repository\_api=>get\_api( )->get(
      EXPORTING i\_url = mime\_url
      IMPORTING e\_content = DATA(pict\_wa)
      EXCEPTIONS OTHERS = 4 ).
    IF sy-subrc = 4.
      RETURN.
    ENDIF.
    pict\_tab =
      VALUE #( LET l1 = xstrlen( pict\_wa ) l2 = l1 - 1022 IN
               FOR j = 0 THEN j + 1022  UNTIL j >= l1
                 ( COND #( WHEN j <= l2 THEN
                                pict\_wa+j(1022)
                           ELSE pict\_wa+j ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The class CL\_ABAP\_BROWSER encapsulates the use of the class CL\_GUI\_HTML\_VIEWER. The static method SHOW\_HTML can be used to display a HTML file in a modal or modeless dialog box or in the same window as the current dynpro. External data, in this case a picture loaded from the MIME Repository, can be passed and displayed. The SAPEVENT events are still passed on and can be handled by the user.

-   The HTML file passed first has errors, since the <html> tag is written incorrectly. In SAP systems, this case always produces an appropriate message.

-   The error list is also represented using SHOW\_HTML, where the error check for this simple purpose is disabled by passing a blank to the appropriate parameter.

-   The error in question is corrected in the HTML file and passed again, with the error check enabled this time.

When the program starts, the file can be display in a modal window, a modeless window, or without a dialog box. If a modeless dialog box is chosen, container dynpros and information messages must be used to keep the dialog box alive. If no messages were sent, the modeless dialog box would not be visible.