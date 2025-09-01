  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Write Accesses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_writing.htm) →  [INSERT dbtab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) →  [INSERT dbtab - source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_source.htm) → 

INSERT, FROM SELECT

This example demonstrates the statement [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) with the addition [FROM SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_source.htm).

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
      INTO TABLE @DATA(temp).
    INSERT demo\_sumdist\_agg FROM TABLE @temp.
    SELECT \* FROM demo\_sumdist\_agg
      ORDER BY carrname, distid, sum\_distance
      INTO TABLE @DATA(insert\_from\_table).
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
      INTO TABLE @DATA(insert\_from\_select).
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

The database table DEMO\_SUMDIST\_AGG is filled with aggregated data from the tables SCARR and SPFLI.

-   First, a standalone SELECT statement is used to read the aggregated data into an internal table and then the statement INSERT is used to write it to the database table. This requires two database reads and the transport of the data between the database server and the AS ABAP.

-   The same SELECT statement is then used directly as a subquery in the INSERT statement. Only a single database read and no transport of data between the database server and the AS ABAP is then required.

The result of both INSERT statements is the same. DEMO\_SUMDIST\_AGG is a [global temporary table (GTT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry"), which means that its content must be deleted before the results are produced (since this creates an implicit database commit).