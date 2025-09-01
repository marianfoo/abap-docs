---
title: "LDB - Field Selections"
description: |
  The statement SELECTION-SCREEN FIELD SELECTION FOR NODETABLE node(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_field.htm) defines a node node of a logical database in the selection include for field selections. This means that individual columns can be nam
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_field_selections.htm"
abapFile: "abenldb_field_selections.htm"
keywords: ["select", "do", "if", "data", "internal-table", "abenldb", "field", "selections"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_oview.htm) →  [LDB - Further Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_others.htm) → 

LDB - Field Selections

The statement [SELECTION-SCREEN FIELD SELECTION FOR NODE*|*TABLE node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_field.htm) defines a node node of a logical database in the selection include for field selections. This means that individual columns can be named in the SELECT list in the SELECT statements of the corresponding subroutine put\_node, instead of just all columns with an asterisk \*. This option is used to keep the amount of data passed from the database at a minimum and can have better performance than always reading the data from all columns in a database table.

The columns read for each node predefined for field selections can be specified using the FIELD addition of the statement GET in the linked executable program or in the parameter FIELD\_SELECTION of the function module LDB\_PROCESS. The database program of the logical database has access to the names of the columns in the data object select\_fields. This data object is generated automatically in the logical database program with reference to the type rsfs\_fields of the type pool RSFS. The data object can also be used in every application program linked with the logical database program.

select\_fields is a deep internal table with the components tablename and fields. In each line, the column tablename contains the name of a node for which field selection is defined. For each of these nodes, the table-like component fields contains the columns specified in the GET statements of the application program. The table fields is defined so that it can be used directly to specify columns dynamically in a SELECT statement.

Example

The database table SCARR is the root node of the logical database DEMO and the table SPFLI is the only successor. The selection include DBDEMOSEL contains the following lines:

SELECT-OPTIONS s\_carrid FOR scarr-carrid.
SELECT-OPTIONS s\_connid FOR spfli-connid.
SELECTION-SCREEN FIELD SELECTION FOR TABLE spfli.

The subroutine put\_spfli of the database program SAPDBDEMO uses the field selections as follows:

FORM put\_spfli.
  STATICS: fieldlists TYPE rsfs\_tab\_fields,
           flag\_read TYPE abap\_bool.
  IF flag\_read = abap\_false.
    fieldlists-tablename = 'SPFLI'.
    READ TABLE select\_fields WITH KEY fieldlists-tablename
                             INTO fieldlists.
    flag\_read = abap\_true.
  ENDIF.
  SELECT (fieldlists-fields)
         FROM spfli
         INTO CORRESPONDING FIELDS OF spfli
         WHERE carrid = scarr-carrid
           AND connid IN s\_connid.
    PUT spfli.
  ENDSELECT.
ENDFORM.

The line of the internal table select\_fields for which the column tablename contains the value "SCARR" is read to the local helper structure fieldlists. The STATICS statements and the field flag\_read ensure that the table select\_fields only needs to be read once each time the program is executed. The table fieldlists-fields is used in the dynamic SELECT list. An executable program that is linked with the logical database can now contain the following lines:

NODES spfli.
...
GET spfli FIELDS cityfrom cityto.
...

The FIELDS addition of the statement GET defines which fields of the database table, except the primary key, are to be read by the logical database. Internally, the runtime framework fills select\_fields with the appropriate values. These values can be checked in the ABAP Debugger.