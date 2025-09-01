# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Object Creation

Included pages: 2


### abenassign_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Object Creation

This section describes the creation of a local data object with the statement [ASSIGN LOCAL COPY](javascript:call_link\('abapassign_local_copy.htm'\)).

Continue
[ASSIGN LOCAL COPY](javascript:call_link\('abapassign_local_copy.htm'\))


### abapassign_local_copy.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Object Creation](javascript:call_link\('abenassign_obsolete.htm'\)) → 

ASSIGN LOCAL COPY

[Short Reference](javascript:call_link\('abapassign_local_copy_shortref.htm'\))

Obsolete Syntax

ASSIGN LOCAL COPY
  OF *{* *{**\[*INITIAL*\]* mem\_area*}*
     *|* *{*INITIAL LINE OF *{*itab*|*(itab\_name)*}**}*
     *|* *{*MAIN TABLE FIELD (name)*}* *}*
  TO <fs> casting\_spec.

Additions:

[1\. ... mem\_area](#!ABAP_ADDITION_1@1@)
[2\. ... MAIN TABLE FIELD (name)](#!ABAP_ADDITION_2@2@)
[3\. ... casting\_spec](#!ABAP_ADDITION_3@3@)

Effect

Obsolete creation of a local data object. This variant of the [ASSIGN](javascript:call_link\('abapassign.htm'\)) statement is only possible in [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") and [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry"). The [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") <fs> must be declared locally in the procedure.

Like the regular statement [ASSIGN](javascript:call_link\('abapassign.htm'\)), the statement ASSIGN LOCAL COPY assigns a memory area mem\_area to the field symbol <fs>. Unlike the regular statement ASSIGN, the field symbol does not reference the memory area specified in mem\_area after the successful assignment. Instead, an [anonymous data object](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") is created in the local data area of the procedure. After the successful execution of the statement, the field symbol points to the new data object. The new data object is handled as follows:

-   The size of the memory area of the new data object depends either on the specification in mem\_area or the [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") of an internal table if LINE OF is specified. The internal table can be specified directly as itab or as the content of a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like field itab\_name.
-   The data type with which the new data object is handled depends, as when using the regular ASSIGN on the data in casting\_spec.
-   The initial content of the new data object is copied from the memory area specified in mem\_area when specifying mem\_area without the addition INITIAL. Otherwise it is initialized according to the type.

The restriction of the memory area [range\_spec](javascript:call_link\('abapassign_range.htm'\)), which can occur in the regular ASSIGN statement implicitly and explicitly, occurs only implicitly in accordance with the rules that also apply to the regular ASSIGN.

Hint

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

The specifications in mem\_area are a subset of the [specifications](javascript:call_link\('abapassign_mem_area.htm'\)) in the regular ASSIGN statement and have the same function except for the following restrictions:

-   If the addition INITIAL is used before mem\_area, the data object name must be character-like and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry").
-   If the addition INITIAL is used before mem\_area, the data object dref cannot be typed [generically](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") when using the dereferencing operator \->\*.

Addition 2   

... MAIN TABLE FIELD (name)

This addition is for internal use only.
It must not be used in application programs.

Effect

This addition is a special form of specifying the memory area mem\_area that is only possible in this variant of the ASSIGN statement. It has the same function as the obsolete [TABLE FIELD (name)](javascript:call_link\('abapassign_table_field.htm'\)) in a regular ASSIGN with the difference that the search range is restricted to the current [main program group](javascript:call_link\('abenmain_program_group_glosry.htm'\) "Glossary Entry").

Addition 3   

... casting\_spec

Effect

Specifying casting\_spec is the same as a regular [ASSIGN](javascript:call_link\('abapassign_casting.htm'\)) with the restriction that if the addition INITIAL is used before mem\_area and an internal tables is specified, no explicit specifications can be made. This means, the field symbol copies the data type of the data object in mem\_area or the line type of the internal table.

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
  <l\_dobj> += 1.
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
  <l\_dobj> += 1.
  cl\_demo\_output=>write\_data( <l\_dobj> ).
  cl\_demo\_output=>display\_data( g\_dobj ).
ENDFORM.
