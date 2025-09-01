  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

currency key

Component of a [DDIC structure](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry"), or [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry"), or [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") of the type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)) defined in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"). A currency key can be linked to a [currency field](javascript:call_link\('abencurrency_field_glosry.htm'\) "Glossary Entry") of a structure, database table, or view. The currency key contains a [currency code](javascript:call_link\('abencurrency_id_glosry.htm'\) "Glossary Entry") from the database table TCURC, and is used to define the currency for the currency field. By default, the number of decimal places of a currency is always two. Currencies with a different number of decimal places must be entered additionally in the table TCURX, where the number of decimal places can be defined explicitly.

[→ More about](javascript:call_link\('abenddic_currency_field.htm'\))