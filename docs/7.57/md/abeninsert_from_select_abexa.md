  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenabap_sql_writing.htm'\)) →  [INSERT dbtab](javascript:call_link\('abapinsert_dbtab.htm'\)) →  [INSERT dbtab, source](javascript:call_link\('abapinsert_source.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INSERT, FROM SELECT, ABENINSERT_FROM_SELECT_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

INSERT, FROM SELECT

This example demonstrates the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) with the addition [FROM SELECT](javascript:call_link\('abapinsert_source.htm'\)).

Source Code   

REPORT demo\_insert\_from\_select.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    "INSERT FROM TABLE
    SELECT
      FROM scarr AS s
           INNER JOIN spfli AS p ON s~carrid = p~carrid
      FIELDS s~mandt,
             s~carrname,
             p~distid,
             SUM( p~distance ) AS sum\_distance
      GROUP BY s~mandt, s~carrname, p~distid
      INTO TABLE @FINAL(temp).
    INSERT demo\_sumdist\_agg FROM TABLE @temp.
    SELECT \* FROM demo\_sumdist\_agg
      ORDER BY carrname, distid, sum\_distance
      INTO TABLE @FINAL(insert\_from\_table).
    DELETE FROM demo\_sumdist\_agg.
    "INSERT FROM SELECT
    INSERT demo\_sumdist\_agg FROM
      ( SELECT
          FROM scarr AS s
            INNER JOIN spfli AS p ON s~carrid = p~carrid
          FIELDS s~carrname,
                 p~distid,
                 SUM( p~distance ) AS sum\_distance
          GROUP BY s~mandt, s~carrname, p~distid ).
    SELECT \* FROM demo\_sumdist\_agg
      ORDER BY carrname, distid, sum\_distance
      INTO TABLE @FINAL(insert\_from\_select).
    DELETE FROM demo\_sumdist\_agg. "GTT
    IF insert\_from\_select = insert\_from\_table.
      cl\_demo\_output=>new( )->write(
        \`Same data inserted by FROM TABLE and FROM SELECT:\`
       )->display( insert\_from\_select ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The DDIC database table DEMO\_SUMDIST\_AGG is filled with aggregated data from the tables SCARR and SPFLI.

-   First, a standalone SELECT statement is used to read the aggregated data into an internal table and then the statement INSERT is used to write it to the DDIC database table. This requires two database reads and the transport of the data between the database server and the AS ABAP.
-   The same SELECT statement is then used directly as a subquery in the INSERT statement. Only a single database read and no transport of data between the database server and the AS ABAP is then required.

The result of both INSERT statements is the same. DEMO\_SUMDIST\_AGG is a [global temporary table (GTT)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry"), which means that its content must be deleted before the results are produced, since this creates an implicit database commit.