  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Assignments](javascript:call_link\('abenobsolete_assignments.htm'\)) → 

ASSIGN, obsolete\_casting

[Short Reference](javascript:call_link\('abapassign_shortref.htm'\))

Obsolete Syntax

... *{* TYPE name *}*
  *|* *{* *\[*TYPE name*\]* DECIMALS dec *}* ...

Additions:

[1\. ... TYPE name](#!ABAP_ADDITION_1@1@)
[2\. ... DECIMALS dec](#!ABAP_ADDITION_2@2@)

Effect

This form of the addition [casting\_spec](javascript:call_link\('abapassign_casting.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)), in which TYPE or DECIMALS is specified without the addition CASTING, is not allowed in classes. Also it cannot be used together with the statement INCREMENT in [mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) or with the addition [RANGE](javascript:call_link\('abapassign_range.htm'\)). However, the field symbol may have been typed using the obsolete- addition [STRUCTURE](javascript:call_link\('abapfield-symbols_obsolete_typing.htm'\)) of the statement [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\)).

Addition 1

... TYPE name

Effect

After TYPE, a single character character-like data object name is expected, which must contain exactly one of the case-sensitive letters "C", "D", "F", "I", "N", "P", "T", "X", "b", or "s" when the statement is executed. These letters label the respective built-in [ABAP types](javascript:call_link\('abenbuiltin_data_type_glosry.htm'\) "Glossary Entry") and have the following effects:

-   If the field symbol <fs> is typed completely or in parts, the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") must match the ABAP type specified after TYPE. The assigned memory area is cast to the type of the field symbol.

-   If the field symbol is typed completely generically, the type of the assigned memory area is cast to the ABAP type specified after TYPE.
    

Hint

The specification of the built-in types b and s using "b" or "s" is an exception to the rule that these cannot be specified in statements. It is only possible in these obsolete variants.

Executable Example

[Casting Built-In Data Types](javascript:call_link\('abencasting_obsolete_type_abexa.htm'\))

Addition 2

... DECIMALS dec

Effect

A numeric data object dec must be specified after DECIMALS. For the [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry"), the data type p is used. Here, the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") is determined by the content of dec. TYPE does not need to be specified for DECIMALS. If TYPE is specified, name must contain the data type "P", which is used anyway.

Executable Example

[Casting Decimal Places](javascript:call_link\('abencasting_obsolete_dec_abexa.htm'\))