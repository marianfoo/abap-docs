---
title: "SELECT - CREATING"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_shortref.htm) Syntax ... CREATING   READERLOCATOR FOR  COLUMNS blob1 blob2 ... clob1 clob2 ...    ALL OTHER BLOBCLOB COLUMNS  READERLOCATOR FOR ...
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_creating.htm"
abapFile: "abapselect_creating.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abapselect", "creating"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - INTO, APPENDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) →  [SELECT - LOB Handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_lob_handles.htm) → 

SELECT - CREATING

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_shortref.htm)

Syntax

... CREATING *{*  READER*|*LOCATOR FOR *{* COLUMNS blob1 blob2 ... clob1 clob2 ... *}*
                                 *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}*
               *\[*READER*|*LOCATOR FOR ...*\]* *}*
           *|* *{*  (crea\_syntax) *}*  ...

Extras:

[1\. ... READER*|*LOCATOR](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]**\]* COLUMNS *\[*blob1 blob2 ... clob1 clob2 ...*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... (crea\_syntax)](#!ABAP_ADDITION_3@3@)

Effect

The addition CREATING must be specified after [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) or [APPENDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) when a reference variable for a [LOB handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_glosry.htm "Glossary Entry") is assigned to a [LOB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_glosry.htm "Glossary Entry") of the results set as a target field and the [static type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry") of this reference variable is one of the following three [LOB interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_interfaces.htm):

-   IF\_ABAP\_DB\_LOB\_HANDLE
    
-   IF\_ABAP\_DB\_BLOB\_HANDLE
    
-   IF\_ABAP\_DB\_BLOB\_HANDLE
    

The information specified after CREATING determines the class from which the associated LOB handles are created. For all other possible static types, the class can be determined from the static type and the LOB type. CREATING cannot be specified in this case.

The CREATING addition can be specified either statically or dynamically. In the static variant, class and columns are determined using additions; in the dynamic variant, the syntax of the static variants is specified in crea\_syntax.

The syntax and the rules for the additions after CREATING correspond to the type and columns specified for the derivation of LOB handle structures with [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm). Unlike the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm), the [type specified](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle_type.htm) is limited here to READER and LOCATOR, and only components that are typed with a LOB interface are respected. The types specified for the first two entries after CREATING cannot be the same.

Addition 1

... READER*|*LOCATOR

Effect

These additions determine the LOB handle class for each of the columns specified.

-   READER creates [reader streams](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreader_stream_glosry.htm "Glossary Entry") for all of the columns specified.
    
-   LOCATOR creates [locators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocator_glosry.htm "Glossary Entry") for all of the columns specified after these.
    

The assignment to the classes is the same as the [type specified](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle_type.htm) in the derivation of a LOB handle structure using [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm), except that here it is the [dynamic type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_type_glosry.htm "Glossary Entry") that is determined and not the static type.

Example

After a row is read, the dynamic type of reader is CL\_ABAP\_DB\_X\_READER.

DATA reader TYPE REF TO if\_abap\_db\_lob\_handle.
SELECT SINGLE picture
       FROM demo\_blob\_table
       WHERE name = '...'
       INTO @reader CREATING READER FOR COLUMNS picture.

Addition 2

... *\[*ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]**\]* COLUMNS *\[*blob1 blob2 ... clob1 clob2 ...*\]*

Effect

These additions assign the previous type specifications to the columns of the result set. The meaning of the additions is the same as the [columns specified](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle_columns.htm) in the derivation of an LOB handle structure using [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm). The difference is that the set of columns used is made up exactly of those columns from the results set that were assigned to a reference variable whose static type is an [LOB interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_interfaces.htm):

-   Do not specify individual columns for which this is not the case.
    
-   The specification of ALL ... COLUMNS only takes such columns into account.
    

The combination options for columns specified with one another and with types specified are the same as for [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm). Specifically, the column specified as ALL OTHER ... must be the last column specified.

Notes

-   The specification of ALL ... COLUMNS also takes into account columns which are added by later enhancements to the data sources.
    
-   The actual names must be used for the columns specified as blob1, blob2, clob1, clob2, and so on. The alias names defined using [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) are ignored.
    
-   The columns cannot be specified using [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path.htm).
    
-   Columns of the type [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenblob_glosry.htm "Glossary Entry").
    

Example

Like the previous example, but the column PICTURE is selected automatically here.

DATA reader TYPE REF TO if\_abap\_db\_blob\_handle.
SELECT SINGLE picture
       FROM demo\_blob\_table
       WHERE name = '...'
       INTO @reader CREATING READER FOR ALL BLOB COLUMNS.

Addition 3

... (crea\_syntax)

Effect

As an alternative to static variants, a data object crea\_syntax can be specified in parentheses which contains the syntax of the static additions or is initial when executing the statement. For crea\_syntax, the same applies as for column\_syntax when specifying columns dynamically in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm). If the content of crea\_syntax is initial, the addition CREATING is ignored.

Example

Like the previous example, but the items that follow CREATING are specified dynamically here.

DATA reader TYPE REF TO if\_abap\_db\_blob\_handle.
DATA(crea\_syntax) = \`READER FOR ALL BLOB COLUMNS\`.
SELECT SINGLE picture
       FROM demo\_blob\_table
       WHERE name = '...'
       INTO @reader CREATING (crea\_syntax).