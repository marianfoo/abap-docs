---
title: "Syntax"
description: |
  ... PARAMETER-TABLE ptab EXCEPTION-TABLE etab ... Additions: 1. ... PARAMETER-TABLE ptab ...(#!ABAP_ADDITION_1@1@) 2. ... EXCEPTION-TABLE etab ...(#!ABAP_ADDITION_2@2@) Effect These additions use the special internal tables ptab and etab to assign actual parameters to the forma
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_dynamic.htm"
abapFile: "abapcall_function_dynamic.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "internal-table", "abapcall", "function", "dynamic"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_procedures.htm) →  [CALL FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function.htm) → 

CALL FUNCTION, parameter\_tables

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*PARAMETER-TABLE ptab*\]*
    *\[*EXCEPTION-TABLE etab*\]* ...

Additions:

[1\. ... PARAMETER-TABLE ptab ...](#!ABAP_ADDITION_1@1@)
[2\. ... EXCEPTION-TABLE etab ...](#!ABAP_ADDITION_2@2@)

Effect

These additions use the special internal tables ptab and etab to assign actual parameters to the formal parameters of the function module and return values to the non-class-based exceptions.

Addition 1

... PARAMETER-TABLE ptab ...

Effect

PARAMETER-TABLE can be used to assign actual parameters to all formal parameters of the called function module. ptab expects a [sorted table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_table_glosry.htm "Glossary Entry") of table type abap\_func\_parmbind\_tab or line type abap\_func\_parmbind from the [type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP. When the statement CALL FUNCTION is executed, the table must contain exactly one line for each non-optional formal parameter. This line is optional for each optional formal parameter. The table columns are:

-   name of type c and length 30
    for the name of the corresponding formal parameter in uppercase letters. If a nonexistent formal parameter is specified, a catchable exception is raised.
    

-   kind of type i
    for the type of the formal parameter. kind must contain the value of one of the following constants of the type pool ABAP:

-   abap\_func\_exporting for input parameters
    

-   abap\_func\_importing for output parameters
    

-   abap\_func\_tables for table parameters
    

-   abap\_func\_changing for input/output parameters
    If the type specified from the caller perspective does not match the actual type of the formal parameter, a catchable exception is raised.
    

-   value of the type REF TO data
    as a pointer to an appropriate actual parameter. The data object to which the reference variable in value points is assigned to the formal parameter specified in name.
    

-   tables\_wa of type REF TO data
    as a pointer to a suitable work area if the column kind contains the value abap\_func\_tables. If tables\_wa is not initial, the data object to which the reference variable points in tables\_wa is passed to the [header line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry") of the table parameter specified in name.

The columns name and kind form the unique key of the table ptab.

Addition 2

... EXCEPTION-TABLE etab ...

Effect

EXCEPTION-TABLE can be used to assign return values to exceptions of the called function module that are not marked as exception classes in the [Function Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). etab expects a [hashed table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhashed_table_glosry.htm "Glossary Entry") of table type abap\_func\_excpbind\_tab or of line type abap\_func\_excpbind from the [type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP. The table can contain exactly one line for each non-class-based exception of the function module when the statement CALL FUNCTION is executed. The table columns are:

-   name of type c and length 30
    For the name of the respective exception, or error\_message, or specifies OTHERS in uppercase letters.
    

-   value of type i
    For the numeric value that is to be available in sy-subrc after the exception specified in name is handled
    

-   message of type REF TO data
    (not currently used)

The column name is the unique key of table etab.

Example

Call of the function module GUI\_DOWNLOAD with dynamic pass by parameter The name of the function module is specified in the string func and the interface is supplied with data using the internal tables ptab and etab.

DATA: line     TYPE c LENGTH 80,
      text\_tab LIKE STANDARD TABLE OF line,
      filename TYPE string,
      filetype TYPE c LENGTH 10,
      fleng    TYPE i.
DATA: func TYPE string,
      ptab TYPE abap\_func\_parmbind\_tab,
      etab TYPE abap\_func\_excpbind\_tab.
func = 'GUI\_DOWNLOAD'.
filename = 'c:\\temp\\text.txt'.
filetype = 'ASC'.
ptab = VALUE #( ( name  = 'FILENAME'
                  kind  = abap\_func\_exporting
                  value = REF #( filename ) )
                ( name  = 'FILETYPE'
                  kind  = abap\_func\_exporting
                  value = REF #( filetype ) )
                ( name  = 'DATA\_TAB'
                  kind  = abap\_func\_tables
                  value = REF #( text\_tab ) )
                ( name  = 'FILELENGTH'
                  kind  = abap\_func\_importing
                  value = REF #( fleng ) ) ).
etab = VALUE #( ( name = 'OTHERS' value = 10 ) ) .
CALL FUNCTION func
  PARAMETER-TABLE ptab
  EXCEPTION-TABLE etab.
CASE sy-subrc.
  WHEN 1.
    ...
  ...
ENDCASE.