# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Meshes / Meshes - Using Mesh Paths / Mesh Path Expressions

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenmesh_path_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_expression.htm)
- [abenmesh_table_expressions_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_table_expressions_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.218Z

---

### abenmesh_path_expression.htm

> **📖 Official SAP Documentation**: [abenmesh_path_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) → 

Mesh Path Expressions

Syntax

... [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) ...

Effect

Specifies a mesh path [mesh\_path](javascript:call_link\('abenmesh_path.htm'\)) as a standalone mesh path expression at an operand position. The result of a mesh path expression is a row from the last path node of the mesh path. This row is described by the [result](javascript:call_link\('abenmesh_path_result.htm'\)) of the mesh path and has the corresponding row type.

An additional condition can be specified in the square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)) of each association, by using [col1 = ...  col2 = ...](javascript:call_link\('abenmesh_path_assoc_cond.htm'\)). If the last path node contains multiple rows that fit the description, the first row found is read.

A mesh path expression is a special type of [table expression](javascript:call_link\('abentable_expressions.htm'\)) and can be used in the same way as a table expression:

-   Possible operand positions are all reading and writing positions listed for [table expressions](javascript:call_link\('abentable_expressions.htm'\)). In a writing position, key fields of primary or secondary table keys of the last path node must not be overwritten.

-   [VALUE](javascript:call_link\('abentable_exp_result.htm'\)) and [REF](javascript:call_link\('abentable_exp_result.htm'\)) can be used to control how the result is passed (as in regular table expressions).

-   A [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) with the structure component selector (\-) can be used to access a component of the row that was read.

If the follow-on node does not contain any rows that meet the condition in square brackets [\[ ... \]](javascript:call_link\('abenmesh_path_assoc.htm'\)), the response is the same as in regular table expressions. In other words, the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised, unless used in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)), in the predicate function [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)), or in the table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)).

Note

Since the rows of a mesh node cannot have tabular components, a mesh path expression cannot have any [chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) to other table expressions.

Executable Example

[Mesh Path Expressions](javascript:call_link\('abenmesh_table_expressions_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Mesh Path Expressions](javascript:call_link\('abenmesh_table_expressions_abexa.htm'\))



**📖 Source**: [abenmesh_path_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_expression.htm)

### abenmesh_table_expressions_abexa.htm

> **📖 Official SAP Documentation**: [abenmesh_table_expressions_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_table_expressions_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenmesh_table_expressions_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_table_expressions_abexa.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Meshes](javascript:call_link\('abenabap_meshes.htm'\)) →  [Meshes - Using Mesh Paths](javascript:call_link\('abenmesh_path_usage.htm'\)) →  [Mesh Path Expressions](javascript:call_link\('abenmesh_path_expression.htm'\)) → 

Mesh Path Expressions

This example demonstrates how mesh paths can be used as standalone expressions.

Source Code

REPORT demo\_mesh\_expressions\_flights.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      t\_scarr    TYPE HASHED TABLE OF scarr
                 WITH UNIQUE KEY carrid,
      t\_spfli    TYPE HASHED TABLE OF spfli
                 WITH UNIQUE KEY carrid connid ,
      t\_sflight  TYPE HASHED TABLE OF sflight
                 WITH UNIQUE KEY carrid connid fldate,
      t\_sairport TYPE HASHED TABLE OF sairport
                 WITH UNIQUE KEY id,
      BEGIN OF MESH t\_flights,
        scarr TYPE t\_scarr
          ASSOCIATION \_spfli TO spfli
                   ON carrid = carrid,
        spfli TYPE t\_spfli
          ASSOCIATION \_sflight TO sflight
                   ON carrid = carrid AND
                      connid = connid
          ASSOCIATION \_sairport TO sairport
                   ON id = airpfrom,
        sflight TYPE t\_sflight,
        sairport TYPE t\_sairport,
      END OF MESH t\_flights.
    CLASS-DATA:
      flights    TYPE t\_flights,
      in         TYPE REF TO if\_demo\_input,
      out        TYPE REF TO if\_demo\_output,
      name       TYPE scarr-carrname VALUE 'Lufthansa',
      id         TYPE spfli-carrid   VALUE 'LH',
      connection TYPE spfli-connid   VALUE '0400',
      date       TYPE sflight-fldate.
    CLASS-METHODS:
      input.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    input( ).
    TRY.
        out->begin\_section(
          'Forward Association scarr\\\_spfli' ).
        DATA(spfli\_wa) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection \].
        out->write( spfli\_wa ).
        out->next\_section(
          'Inverse Association spfli\\^\_spfli~scarr' ).
        DATA(scarr\_wa) =
          flights-spfli\\^\_spfli~scarr\[
            flights-spfli\[ carrid = ID connid = CONNECTION \] \].
        out->write( scarr\_wa ).
        out->next\_section(
          'Chained Association scarr\\\_spfli\\\_sflight' ).
        DATA(sflight\_wa) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date \].
        out->write( sflight\_wa ).
        out->next\_section(
          'Addressing Component' ).
        DATA(price) =
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date \]-price.
        out->write( price ).
        out->next\_section(
          'Assigning to Field Symbol' ).
        ASSIGN
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = NAME \]
                                  connid = CONNECTION
                                \]\\\_sflight\[ fldate = DATE \]
          TO FIELD-SYMBOL(<sflight\_wa>).
        IF sy-subrc = 0.
          out->write( 'Field symbol OK' ).
        ENDIF.
        out->next\_section(
          'Write Access and Check Existence' ).
        flights-scarr\\\_spfli\[ flights-scarr\[ carrname = NAME \]
                                connid = CONNECTION
                              \]\\\_sflight\[ fldate = DATE
                              \]-price = price - 10.
        IF line\_exists(
          flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                  connid = connection
                                \]\\\_sflight\[ fldate = date
                                              price = price - 10 \] ).
          out->write( 'Line found!' ).
        ENDIF.
      CATCH cx\_sy\_itab\_line\_not\_found.
        out->write( 'Exception!' ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    in  = cl\_demo\_input=>new( ).
    out = cl\_demo\_output=>new( ).
    SELECT \*
           FROM scarr
           INTO TABLE @flights-scarr.
    SELECT \*
           FROM spfli
           INTO TABLE @flights-spfli.
    SELECT \*
           FROM sflight
           INTO TABLE @flights-sflight.
    SELECT \*
           FROM sairport
           INTO TABLE @flights-sairport.
  ENDMETHOD.
  METHOD input.
    TRY.
        date = flights-sflight\[ carrid = id
                                connid = connection \]-fldate.
      CATCH cx\_sy\_itab\_line\_not\_found.
        LEAVE PROGRAM.
    ENDTRY.
    in->add\_field( CHANGING  field = name
     )->add\_field( CHANGING  field = connection
     )->add\_field( CHANGING  field = id
     )->add\_field( CHANGING  field = date
     )->request( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The following mesh paths are used as mesh path expressions:

-   Mesh path with forward association as an initial association on the right side of an assignment. The source in the square brackets is a table expression, plus a condition.

flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                     connid = connection \]

-   Mesh path with inverse association as an initial association on the right side of an assignment. The source in the square brackets is a table expression.

flights-spfli\\^\_spfli~scarr\[ flights-spfli\[ carrid = ID
                                            connid = CONNECTION \] \]

-   Mesh path with path extension after the initial association on the right side of an assignment.

flights-scarr\\\_spfli\[ flights-scarr\[ carrname = name \]
                                     connid = connection
                                   \]\\\_sflight\[ fldate = date \]

The mesh path with path extension is also used to demonstrate the addressing of a component using the structure component selector, assignments to a field symbol, reads, and usage in the predicate function line\_exists.
