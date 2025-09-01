  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

LOOP AT itab, TABLE LINE

Obsolete Syntax

[LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)) ... [WHERE](javascript:call_link\('abaploop_at_itab_cond.htm'\)) TABLE LINE ....

Effect

The addition TABLE LINE can also be specified outside of classes in the WHERE condition of a LOOP statement, instead of the pseudo component table\_line.

Hint

ABAP Compiler should consider this addition as an error, retained only for reasons of downward compatibility. Always specify the pseudo component table\_line instead of TABLE LINE.

Bad Example

DATA: itab TYPE TABLE OF i,
      wa   TYPE i.
LOOP AT itab INTO wa WHERE TABLE LINE > 10.
ENDLOOP.

Good Example

DATA: itab TYPE TABLE OF i,
      wa   TYPE i.
LOOP AT itab INTO wa WHERE table\_line > 10.
ENDLOOP.