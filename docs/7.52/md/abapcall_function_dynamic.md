---
title: "Syntax"
description: |
  ... PARAMETER-TABLE ptab EXCEPTION-TABLE etab ... Extras: 1. ... PARAMETER-TABLE ptab ...(#!ABAP_ADDITION_1@1@) 2. ... EXCEPTION-TABLE etab ...(#!ABAP_ADDITION_2@2@) Effect These additions use the special internal tables ptab and etab to assign actual parameters to the formal p
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_dynamic.htm"
abapFile: "abapcall_function_dynamic.htm"
keywords: ["do", "if", "case", "try", "class", "data", "internal-table", "abapcall", "function", "dynamic"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [CALL FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm) → 

CALL FUNCTION - parameter\_tables

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*PARAMETER-TABLE ptab*\]*
    *\[*EXCEPTION-TABLE etab*\]* ...

Extras:

[1\. ... PARAMETER-TABLE ptab ...](#!ABAP_ADDITION_1@1@)
[2\. ... EXCEPTION-TABLE etab ...](#!ABAP_ADDITION_2@2@)

Effect

These additions use the special internal tables ptab and etab to assign actual parameters to the formal parameters of the function module and to assign return values to the non-class-based exceptions.

Addition 1

... PARAMETER-TABLE ptab ...

Effect

PARAMETER-TABLE can be used to assign actual parameters to all formal parameters of the called function module. ptab expects a [sorted table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry") of table type ABAP\_FUNC\_PARMBIND\_TAB or of row type ABAP\_FUNC\_PARMBIND from the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") ABAP. When the statement CALL FUNCTION is executed, the table must contain exactly one row for each non-optional formal parameter. This row is optional for each optional formal parameter. The columns of the table are as follows:

-   NAME of type c and length 30
    Specifies the name of the formal parameter in question in uppercase. If a nonexistent formal parameter is specified, a handleable exception is raised.
    
-   KIND of type i
    Specifies the category of the formal parameter. KIND must have the value of one of the following constants of the type group ABAP:
    

\- ABAP\_FUNC\_EXPORTING for input parameters

\- ABAP\_FUNC\_IMPORTING for output parameters

\- ABAP\_FUNC\_TABLES for table parameters

\- ABAP\_FUNC\_CHANGING for input/output parameters
If the category specified from the caller perspective does not match the actual category of the formal parameter, a handleable exception is raised.

-   VALUE of type REF TO data
    Used as a pointer to an appropriate actual parameter. The data object pointed to by the reference variable in VALUE is assigned to the formal parameter specified in NAME.
    
-   TABLES\_WA of type REF TO data
    Used as a pointer to a suitable work area if the column KIND contains the value ABAP\_FUNC\_TABLES. If TABLES\_WA is not initial, the data object pointed to by the reference variable in TABLES\_WA is passed to the [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry") of the table parameter specified in NAME.
    

Together, the columns NAME and KIND are the unique key of the table ptab.

Addition 2

... EXCEPTION-TABLE etab ...

Effect

EXCEPTION-TABLE can be used to assign return values to exceptions of the called function module that are not marked as exception classes in [Function Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). etab expects a [hashed table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry") of table type ABAP\_FUNC\_EXCPBIND\_TAB or of row type ABAP\_FUNC\_EXCPBIND from the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") ABAP. The table can contain exactly one row for each non-class-based exception of the function module when the statement CALL FUNCTION is executed. The columns of the table are as follows:

-   NAME of type c and length 30
    Specifies the name of the exception or error\_message in question or specifies OTHERS in uppercase.
    
-   VALUE of type i
    Specifies the number value that is available in sy-subrc after the exception specified in NAME is handled
    
-   MESSAGE of type REF TO data
    (Not currently used.)
    

The column NAME is the unique key of table etab.

Example

Calls the function module GUI\_DOWNLOAD with dynamic pass by parameter The name of the function module is specified in the string func and the interface is supplied with data using the internal tables ptab and etab.

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
etab = VALUE #( ( name = 'OTHERS' value = 10 ) ).
CALL FUNCTION func
  PARAMETER-TABLE ptab
  EXCEPTION-TABLE etab.
CASE sy-subrc.
  WHEN 1.
    ...
  ...
ENDCASE.