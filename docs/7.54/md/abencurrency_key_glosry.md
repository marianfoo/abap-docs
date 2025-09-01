  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

currency key

Component of a [structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry"), [database table](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry"), or [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") of the type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)) defined in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"). A currency key can be associated with a [currency field](javascript:call_link\('abencurrency_field_glosry.htm'\) "Glossary Entry") of a structure, database table, or view. The currency key contains a [currency ID](javascript:call_link\('abencurrency_id_glosry.htm'\) "Glossary Entry") from the database table TCURC, and defines the currency for the currency field. By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

[→ More](javascript:call_link\('abenddic_currency_field.htm'\))