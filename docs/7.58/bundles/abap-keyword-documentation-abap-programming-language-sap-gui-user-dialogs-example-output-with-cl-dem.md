# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / Example Output with CL_DEMO_OUTPUT

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencl_demo_output.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output.htm)
- [abencl_demo_output_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:29.002Z

---

### abencl_demo_output.htm

> **📖 Official SAP Documentation**: [abencl_demo_output.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abencl_demo_output.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%20Output%20with%20CL_DEMO_OUTPUT%2C%20ABENCL_DEMO_OUTPUT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Example Output with CL\_DEMO\_OUTPUT

Class CL\_DEMO\_OUTPUT is provided by the ABAP Keyword Documentation to create simple outputs of data in example programs without the need of [classic lists](javascript:call_link\('abenabap_dynpro_list.htm'\)). It is not intended for production usage. It can be used in demonstration programs, local test programs or for temporary testing in production programs. It must not be used in production programs.

The class can be used via static methods and instance methods. For using instance methods, interface IF\_DEMO\_OUTPUT can be used. The following methods create output in an output stream:

-   Methods BEGIN\_SECTION, NEXT\_SECTION, and END\_SECTION create headers and open or close header levels.
-   Methods WRITE\_DATA, WRITE\_TEXT, WRITE\_XML, WRITE\_JSON, WRITE\_HTML and so on write different kinds of output to the output stream.
    -   With method WRITE\_DATA any kind of ABAP data can be written to the output stream.
    -   The other methods create formatted outputs of texts, XML, JSON, or HTML data.
-   Method WRITE is generic and handles ABAP data as well as texts in non-proportional format.
-   Methods DISPLAY\_... (available as static methods only) work as WRITE\_... but close the current output stream and open a new one. If a SAP GUI is available, the output is displayed in a window.
-   Method LINE creates a horizontal line.
-   Method DISPLAY closes the current output stream and opens a new one. If a SAP GUI is available, the output is displayed in a window. Optionally, data can be passed to DISPLAY in the same way as for WRITE.
-   Method GET works like DISPLAY but does not display the data. Instead the formatted output data are returned in a text string and can be handled further.

The standard output format is HTML. Optionally, also formats TEXT, JSON and XML can be set. The format is set with method SET\_MODE for the static methods or using the input parameter MODE of the factory method NEW for the instance methods.

Each instance method returns the self reference me in order to enable method chainings.

Hints

-   CL\_DEMO\_OUTPUT is based on a class CL\_DEMO\_OUTPUT\_STREAM that collects the data in an internal table that is converted to an XML file and raises an event on completion. Special handler classes convert the XML file to HTML, plain text, or JSON depending on the output mode.
-   CL\_DEMO\_OUTPUT is widely used in the example classes and programs of the ABAP Keyword Documentation.
-   CL\_DEMO\_OUTPUT is integrated into the ABAP console of [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") that can be filled by executing classes (inheriting from CL\_DEMO\_CLASSRUN or implementing IF\_OO\_ADT\_CLASSRUN) or executable programs by F9.
-   There is also a class CL\_DEMO\_INPUT for rudimentary inputs. But this class is not as powerful as [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

Executable Example

[Usage of CL\_DEMO\_OUTPUT](javascript:call_link\('abencl_demo_output_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Usage of CL\_DEMO\_OUTPUT](javascript:call_link\('abencl_demo_output_abexa.htm'\))



**📖 Source**: [abencl_demo_output.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output.htm)

### abencl_demo_output_abexa.htm

> **📖 Official SAP Documentation**: [abencl_demo_output_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abencl_demo_output_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencl_demo_output_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Example Output with CL\_DEMO\_OUTPUT](javascript:call_link\('abencl_demo_output.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Usage%20of%20CL_DEMO_OUTPUT%2C%20ABENCL_DEMO_OUTPUT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Usage of CL\_DEMO\_OUTPUT

Source Code   

\* Public class definition
CLASS cl\_demo\_output\_usage DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
        REDEFINITION .
ENDCLASS.
\* CCIMP
CLASS demo\_class DEFINITION.
  PUBLIC SECTION.
    TYPES:
    BEGIN OF spfli\_line,
    carrid TYPE spfli-carrid,
    connid TYPE spfli-connid,
    cityfrom TYPE spfli-cityfrom,
    cityto TYPE spfli-cityto,
    END OF spfli\_line,
    spfli\_tab TYPE HASHED TABLE OF spfli\_line
    WITH UNIQUE KEY carrid connid,
    BEGIN OF struct,
    carrname TYPE scarr-carrname,
    spfli TYPE REF TO spfli\_tab,
    END OF struct.
    DATA result TYPE SORTED TABLE OF struct WITH UNIQUE KEY carrname.
    METHODS constructor.
ENDCLASS.
CLASS demo\_class IMPLEMENTATION.
  METHOD constructor.
    SELECT s~carrname, p~carrid, p~connid, p~cityfrom, p~cityto
    FROM scarr AS s
    INNER JOIN spfli AS p
    ON s~carrid = p~carrid
    ORDER BY s~carrname
    INTO TABLE @DATA(itab).
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>) GROUP BY <fs>-carrname.
      INSERT VALUE #( carrname = <fs>-carrname ) INTO TABLE result
      ASSIGNING FIELD-SYMBOL(<line>).
      <line>-spfli = NEW #(
      FOR <wa> IN GROUP <fs> ( CORRESPONDING #( <wa> ) ) ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_output\_usage IMPLEMENTATION.
  METHOD main.
    TRY.
        DATA mode TYPE string VALUE 'HTML'.
        cl\_demo\_input=>new(
         )->add\_text( 'HTML, TEXT, JSON, XML'
         )->add\_field( CHANGING field = mode
         )->request( ).
        mode = to\_upper( mode ).
        out->set\_mode( mode ).
        out->line(
         )->write( 'Example output produced by CL\_DEMO\_OUTPUT'
         )->line( ).
        DATA(number) = 111.
        out->next\_section( 'Elementary Field'
        )->write( number ).
        SELECT SINGLE \*
               FROM scarr
               WHERE carrid = 'UA'
               INTO @FINAL(scarr\_wa).
        out->next\_section( 'Structure with Elementary Components'
        )->write( scarr\_wa ).
        SELECT \*
               FROM scarr
               ORDER BY carrid
               INTO TABLE @FINAL(scarr\_tab).
        out->next\_section( 'Table with Elementary Columns'
        )->write( scarr\_tab ).
        DATA:
          BEGIN OF complex\_structure,
            col1 LIKE number,
            col2 LIKE scarr\_wa,
            col3 LIKE scarr\_tab,
          END OF complex\_structure.
        complex\_structure = VALUE #( col1 = number
                                     col2 = scarr\_wa
                                     col3 = scarr\_tab ).
        out->next\_section( 'Structure with Complex Components'
        )->write( complex\_structure ).
        DATA complex\_tab LIKE STANDARD TABLE OF complex\_structure.
        complex\_tab = VALUE #(
          ( col1 = 1
            col2 = scarr\_tab\[ 1 \]
            col3 = VALUE #( ( LINES OF scarr\_tab FROM 1 TO 3 ) ) )
          ( col1 = 2
            col2 = scarr\_tab\[ 4 \]
            col3 = VALUE #( ( LINES OF scarr\_tab FROM 4 TO 6 ) ) ) ).
        out->next\_section( 'Table with Complex Columns'
        )->write( complex\_tab ).
        DATA tab\_in\_tab LIKE TABLE OF scarr\_tab.
        tab\_in\_tab = VALUE #(
          ( VALUE #( ( LINES OF scarr\_tab FROM 1 TO 3 ) ) )
          ( VALUE #( ( LINES OF scarr\_tab FROM 4 TO 6 ) ) ) ).
        out->next\_section( 'Table in Table'
        )->write( tab\_in\_tab ).
        DATA(oref) = NEW demo\_class( ).
        out->next\_section( 'Referenced Object and Data Object'
        )->write( oref ).
      CATCH cx\_root INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The class shows the output produced by [CL\_DEMO\_OUTPUT](javascript:call_link\('abencl_demo_output.htm'\)) for some ABAP data types. The output mode can be entered. More usage of CL\_DEMO\_OUTPUT can be found in many examples of the ABAP Keyword Documentation.
