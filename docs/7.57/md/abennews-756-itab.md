  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-756.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables in Release 7.56, ABENNEWS-756-ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables in Release 7.56

[1\. Access to Generically Typed Internal Tables](#!ABAP_MODIFICATION_1@1@)
[2\. Alias Names for Secondary Keys](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Access to Generically Typed Internal Tables

Earlier, in statements for [accessing internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_access.htm), the internal table had to be known statically. The operand had to be typed at least with any table.

Now, this restriction is partly removed. In the statements [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm), [APPEND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend.htm), [COLLECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm), [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm), [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab.htm), [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm), [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm), and [SORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm), operands can be field symbols and formal parameters that are typed fully generically with TYPE data or TYPE any. Such operands can be used as if typed with any table. If an index access is involved, operands are still required that are typed at least with TYPE index\_table.

Hint

This is not yet possible in expressions as [FOR expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm) or [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm).

Example

The following was not possible in older releases.

DATA itab TYPE TABLE OF scarr.
FIELD-SYMBOLS <itab> TYPE ANY.
ASSIGN itab TO <itab>.
LOOP AT <itab> ASSIGNING FIELD-SYMBOL(<fs>).
  ...
ENDLOOP.

Modification 2   

Alias Names for Secondary Keys

Alias names can now be declared for [secondary keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_key_glosry.htm "Glossary Entry") of internal tables by using the addition ALIAS of [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_secondary_key.htm) and [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_secondary_key.htm). This can be helpful when changing existing secondary keys without invalidating users.