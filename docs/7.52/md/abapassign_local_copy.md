---
title: "ASSIGN LOCAL COPY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_local_copy_shortref.htm) Obsolete Syntax ASSIGN LOCAL COPY OF  INITIAL mem_area  INITIAL LINE OF itab(itab_name)  MAIN TABLE FIELD (name)  TO <fs> casting_spec. E
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_local_copy.htm"
abapFile: "abapassign_local_copy.htm"
keywords: ["do", "if", "case", "try", "class", "data", "internal-table", "field-symbol", "abapassign", "local", "copy"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Object Creation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassign_obsolete.htm) → 

ASSIGN LOCAL COPY

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_local_copy_shortref.htm)

Obsolete Syntax

ASSIGN LOCAL COPY
  OF *{* *{**\[*INITIAL*\]* mem\_area*}*
     *|* *{*INITIAL LINE OF *{*itab*|*(itab\_name)*}**}*
     *|* *{*MAIN TABLE FIELD (name)*}* *}*
  TO <fs> casting\_spec.

Extras:

[1\. ... mem\_area](#!ABAP_ADDITION_1@1@)
[2\. ... MAIN TABLE FIELD (name)](#!ABAP_ADDITION_2@2@)
[3\. ... casting\_spec](#!ABAP_ADDITION_3@3@)

Effect

Obsolete creation of a local data object. This variant of the [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) statement can only be used in [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry") and [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_module_glosry.htm "Glossary Entry"). The [field symbol](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_symbol_glosry.htm "Glossary Entry") <fs> must be declared locally in the procedure.

Like the regular statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm), the statement ASSIGN LOCAL COPY assigns a memory area mem\_area to the field symbol <fs>. Unlike the regular statement ASSIGN, the field symbol does not reference the memory area specified in mem\_area after the successful assignment. Instead, an [anonymous data object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") is created in the local data area of the procedure. After the successful execution of the statement, the field symbol points to the new data object. The new data object is handled as follows:

-   The size of the memory area of the new data object conforms to either the data in mem\_area or the [line type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrow_type_glosry.htm "Glossary Entry")of an internal table if LINE OF is specified. The internal table can be specified directly as itab or as the content of a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like field itab\_name.
    
-   The data type with which the new data object is to be handled conforms to the data in casting\_spec as is the case when using the regular ASSIGN.
    
-   The initial content of the new data object is copied from the memory area specified in mem\_area when specifying mem\_area without the addition INITIAL. Otherwise it is initialized according to type.
    

Limitation of the memory area [range\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_range.htm), which can occur in the regular ASSIGN statement implicitly and explicitly, occurs only implicitly in accordance with the rules that also apply to the normal ASSIGN.

Note

The creation of a local data object using the statement ASSIGN LOCAL COPY is replaced by the statement CREATE DATA with subsequent dereferencing in the regular ASSIGN statement.

Addition 1

... mem\_area

Syntax of mem\_area

... *{* dobj*\[*+off*\]**\[*(len)*\]*
    *|* (name)
    *|* oref->(attr\_name)
    *|* *{*class*|*(class\_name)*}*\=>*{*attr*|*(attr\_name)*}*
    *|* dref->\* *}* ...

Effect

The specifications in mem\_area are a subset of the [specifications](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) in the regular ASSIGN statement. They have the same function except for the following restrictions:

-   If the addition INITIAL is used before mem\_area, the data object name must be character-like and [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry").
    
-   If the addition INITIAL is used before mem\_area, the data object dref cannot be typed [generically](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") when using the dereferencing operator \->\*.
    

Addition 2

... MAIN TABLE FIELD (name)

This addition is for internal use only.
It must not be used in application programs.

Effect

This addition is a special form of the specified memory area mem\_area that can only be used in this variant of the ASSIGN statement. It has the same function as the obsolete [TABLE FIELD (name)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_table_field.htm) in a regular ASSIGN with the exception that the search area is restricted to the current [main program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_program_group_glosry.htm "Glossary Entry").

Addition 3

... casting\_spec

Effect

If specified, casting\_spec is the same as a regular [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) with the limitation that if the addition INITIAL is used before mem\_area and an internal tables is specified, no explicit specifications can be made. This means, the field symbol copies the data type of the data object in mem\_area or the line type of the internal table.

Example

A typical use of the statement ASSIGN LOCAL COPY was the creation of a local copy of a global data object.

DATA g\_dobj TYPE i.
...
CLEAR g\_dobj.
PERFORM subroutine1.
...
FORM subroutine1.
  FIELD-SYMBOLS <l\_dobj> TYPE ANY.
  ASSIGN LOCAL COPY OF g\_dobj TO <l\_dobj>.
  <l\_dobj> = <l\_dobj> + 1.
  cl\_demo\_output=>write\_data( <l\_dobj> ).
  cl\_demo\_output=>display\_data( g\_dobj ).
ENDFORM.

The following subroutine shows how the same functions can be universally implemented with a data reference.

DATA g\_dobj TYPE i.
...
CLEAR g\_dobj.
PERFORM subroutine2.
...
FORM subroutine2.
  DATA dref TYPE REF TO data.
  FIELD-SYMBOLS <l\_dobj> TYPE ANY.
  CREATE DATA dref LIKE g\_dobj.
  ASSIGN dref->\* TO <l\_dobj>.
  <l\_dobj> = g\_dobj.
  <l\_dobj> = <l\_dobj> + 1.
  cl\_demo\_output=>write\_data( <l\_dobj> ).
  cl\_demo\_output=>display\_data( g\_dobj ).
ENDFORM.