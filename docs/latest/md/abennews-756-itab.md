  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.56](javascript:call_link\('abennews-756.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%20in%20ABAP%20Release%207.56%2C%20ABENNEWS-756-ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internal Tables in ABAP Release 7.56

[1\. Access to Generically Typed Internal Tables](#!ABAP_MODIFICATION_1@1@)
[2\. Alias Names for Secondary Keys](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Access to Generically Typed Internal Tables

Earlier, in statements for [accessing internal tables](javascript:call_link\('abenitab_access.htm'\)), the internal table had to be known statically. The operand had to be typed at least with any table.

Now, this restriction is partly removed. In the statements [INSERT](javascript:call_link\('abapinsert_itab.htm'\)), [APPEND](javascript:call_link\('abapappend.htm'\)), [COLLECT](javascript:call_link\('abapcollect.htm'\)), [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)), [DELETE](javascript:call_link\('abapdelete_itab.htm'\)), [READ](javascript:call_link\('abapread_table.htm'\)), [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)), and [SORT](javascript:call_link\('abapsort_itab.htm'\)), operands can be field symbols and formal parameters that are typed fully generically with TYPE data or TYPE any. Such operands can be used as if typed with any table. If an index access is involved, operands are still required that are typed at least with TYPE index\_table.

Hint

This is not yet possible in expressions as [FOR expressions](javascript:call_link\('abenfor_itab.htm'\)) or [table expressions](javascript:call_link\('abentable_expressions.htm'\)).

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

Alias names can now be declared for [secondary keys](javascript:call_link\('abensecondary_key_glosry.htm'\) "Glossary Entry") of internal tables by using the addition ALIAS of [TYPES](javascript:call_link\('abaptypes_secondary_key.htm'\)) and [DATA](javascript:call_link\('abapdata_secondary_key.htm'\)). This can be helpful when changing existing secondary keys without invalidating users.