  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20itab%2C%20TABLE%20LINE%2C%20ABAPLOOP_TABLE_LINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT itab, TABLE LINE

Obsolete Syntax

[LOOP AT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm) ... [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm) TABLE LINE ....

Effect

The addition TABLE LINE can also be specified outside of classes in the WHERE condition of a LOOP statement, instead of the pseudo component table\_line.

Hint

The ABAP Compiler should consider this addition as an error, retained only for reasons of downward compatibility. The pseudo component table\_line should always be specified instead of TABLE LINE.

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