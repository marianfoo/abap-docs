  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Field Symbols](javascript:call_link\('abenfield_symbols_obsolete.htm'\)) → 

FIELD-SYMBOLS - obsolete\_typing

[Quick Reference](javascript:call_link\('abapfield-symbols_shortref.htm'\))

Obsolete Syntax

... *{* *}* *|* STRUCTURE struc DEFAULT dobj ...

Extras:

[1\. ... *{* *}*](#!ABAP_ADDITION_1@1@)
[2\. ... STRUCTURE struc DEFAULT dobj](#!ABAP_ADDITION_2@2@)

Effect

These additions of the statement [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\)) produce an obsolete typing of the field symbol and are forbidden in classes.

Addition 1

... *{* *}*

Effect

If no explicit type is specified after FIELD-SYMBOLS, the field symbol is typed implicitly with the fully generic type any. Also, the field symbol is assigned the predefined constant space when the context is loaded. This means that the field symbol is not initial directly after it has been declared, and a check using [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) is true.

Addition 2

... STRUCTURE struc DEFAULT dobj

Effect

If the addition STRUCTURE (which is forbidden within classes) is specified for a field symbol instead of [typing](javascript:call_link\('abentyping_syntax.htm'\)) and struc is a local program structure (a data object, not a data type) or a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") from ABAP Dictionary, this structure is cast for the field symbol <fs>. dobj must be used to specify a data object that is assigned to the field symbol as an initial object.

The field symbol inherits the technical attributes of structure struc as if it were completely typed. For a structured data object dobj, the [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") has to match the struc view. In the case of an elementary data object, the object must be character-like and flat, and struc must be character-like only. The same applies to assignments of data objects to field symbols typed using STRUCTURE when using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).

Note

Field symbols declared using the addition STRUCTURE are a mixture of typed field symbols and a utility for [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") to structured data types. The additions TYPE or LIKE of the statement FIELD-SYMBOLS should be used to type field symbols, while the addition CASTING of the statement ASSIGN is used for casting.

Example

The first example shows the obsolete usage of the addition STRUCTURE.

DATA wa1 TYPE c LENGTH 512.
FIELD-SYMBOLS <scarr1> STRUCTURE scarr DEFAULT wa1.
<scarr1>-carrid = '...'.

The second example shows the replacement of STRUCTURE with the additions TYPE and CASTING.

DATA wa2 TYPE c LENGTH 512.
FIELD-SYMBOLS <scarr2> TYPE scarr.
ASSIGN wa2 TO <scarr2> CASTING.
<scarr2>-carrid = '...'.

Executable Example

[Field Symbols, Cast Structures](javascript:call_link\('abenfield_symbols_struc_abexa.htm'\))