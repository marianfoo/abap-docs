  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Components](javascript:call_link\('abenldb_oview.htm'\)) →  [Logical Databases - Further Elements](javascript:call_link\('abenldb_others.htm'\)) → 

Logical Databases - Dynamic Selections

Alongside static selections, the selection screen of a logical database can also contain [dynamic selections](javascript:call_link\('abendynamic_selection_glosry.htm'\) "Glossary Entry"). Dynamic selections enable the user to instruct the logical database to make further user-defined selections for database reads, alongside the static selections defined in the selection include. Before the logical database can offer dynamic selections for a node, the statement [SELECTION-SCREEN DYNAMIC SELECTIONS](javascript:call_link\('abapselection-screen_ldb_dynamic.htm'\)) must be specified in the selection include.

If the node node specified here is requested by the associated program, the dynamic selections become part of the selection screen. After choosing Dynamic Selections, the user can make selections for the fields offered by the logical database. If called by the function module LDB\_PROCESS, an appropriate parameter can be passed. In the [database program](javascript:call_link\('abenldb_program.htm'\)), dynamic statements can be used to instruct the selections to read the data. The values of every program-specific selection criterion for which a dynamic selection node is defined are also passed to the logical database before the data is selected. The user can define the field list specified for dynamic selections as a [selection view](javascript:call_link\('abenldb_selection_views.htm'\)) of the logical database.

Before the dynamic selections can be used in the SELECT statements of a subroutine put\_node, the data object dyn\_sel must be used that is declared implicitly in the logical database program with reference to the data type rsds\_type from the type group RSDS. The data object dyn\_sel is available only in the database program, but not in an associated executable program. dyn\_sel is a deep structure with the following components:

-   clauses
    Internal table with the dynamic selections entered by the user (or any program-specific selection criteria) for dynamic WHERE conditions. In each row, the column tablename contains the name of a node reserved for dynamic selections. For each of these nodes, the table-like component where\_tab contains the selection conditions of the dynamic selections in a format that can be used directly in a dynamic WHERE.

-   texpr
    Contains the selections of the dynamic selections in an internal format (reverse Polish notation) that can be used for both the function modules FREE\_SELECTIONS\_INIT and FREE\_SELECTIONS\_DIALOG for program-driven creation of dynamic selections.

-   trange
    Internal table containing the selections of the dynamic selection as [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). In each row, the column tablename contains the name of a node reserved for dynamic selections. For each of these nodes, the table-like component frange\_t contains a column fieldname with the field names and selopt\_t with the associated ranges tables.

Note

trange enables the selections for individual fields of the nodes to be accessed directly. Furthermore, selections with this format are easier to modify than selections in clauses format.

Example

Uses dynamic selections in a dynamic WHERE condition in the database program. The table SCARR is the root node of a logical database DEMO and the table SPFLI is the only successor. The selection include DBDEMOSEL contains the following lines:

SELECT-OPTIONS s\_carrid FOR scarr-carrid.
SELECT-OPTIONS s\_connid FOR spfli-connid.
SELECTION-SCREEN DYNAMIC SELECTIONS FOR TABLE scarr.

The subroutine put\_scarr of the database program SAPDBDEMO uses the dynamic selections as follows:

FORM put\_scarr.
  STATICS: dynamic\_selections TYPE rsds\_where,
           flag\_read TYPE abap\_bool.
  IF flag\_read = abap\_false.
    dynamic-selections-tablename = 'SCARR'.
    READ TABLE dyn\_sel-clauses
               WITH KEY dynamic\_selections-tablename
               INTO dynamic\_selections.
    flag\_read = abap\_true.
  ENDIF.
  SELECT \* FROM scarr
         WHERE  carrid IN s\_carrid
         AND   (dynamic\_selections-where\_tab).
    PUT scarr.
  ENDSELECT.
ENDFORM.

The row of the internal table dyn\_sel-clauses for which the column tablename contains the value "SCARR" is read to the local structure dynamic\_selections. The STATICS statements and the field flag\_read make sure that the table dyn\_sel only needs to be read once each time the program is executed. The table where\_tab is used in the dynamic WHERE clause.

Each executable program that uses the logical database and contains a NODES or TABLES statement for SCARR or SPFLI offers dynamic selections for the fields of the table SCARR on its selection screen and the logical database reads only those rows that meet the selection conditions on the selection screen and the dynamic selections.

Example

Uses ranges tables in the database program. The same applies to the structure and selections as in the previous example. The subroutine put\_scarr is now as follows:

FORM put\_scarr.
  STATICS: dynamic\_ranges TYPE rsds\_range,
           dynamic\_range1 TYPE rsds\_frange,
           dynamic\_range2 TYPE rsds\_frange,
           flag\_read TYPE abap\_bool.
  IF flag\_read = abap\_false.
    dynamic\_ranges-tablename = 'SCARR'.
    READ TABLE dyn\_sel-trange
               WITH KEY dynamic\_ranges-tablename
               INTO dynamic\_ranges.
    dynamic\_range1-fieldname = 'CARRNAME'.
    READ TABLE dynamic\_ranges-frange\_t
               WITH KEY dynamic\_range1-fieldname
               INTO dynamic\_range1.
    dynamic\_range2-fieldname = 'CURRCODE'.
    READ TABLE dynamic\_ranges-frange\_t
               WITH KEY dynamic\_range2-fieldname
               INTO dynamic\_range2.
    flag\_read = abap\_true.
  ENDIF.
  SELECT \* FROM scarr
         WHERE  carrid IN s\_carrid
         AND    carrname IN dynamic\_range1-selopt\_t
         AND    currcode IN dynamic\_range2-selopt\_t.
    PUT scarr.
  ENDSELECT.
ENDFORM.

The row of the internal table trange for which the column tablename contains the value "SCARR" is read to the local helper table dynamic\_ranges. The nested tables frange\_t are read from fieldname to the local helper tables dynamic\_range1 and dynamic\_range2, depending on their content. The STATICS statements and the field flag\_read make sure that the tables only need to be read once each time the program is executed. The nested tables selopt\_t of these helper tables now contain the ranges tables for the database columns CARRNAME and CURRCODE. The tables selopt\_t are used directly as selection tables in the SELECT statement. CARRNAME and CURRCODE are the only other columns in the database table SCARR, which means this logical database offers the same functions as in the previous database.