  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20primary%20table%20key%2C%20ABENPRIMARY_TABLE_KEY_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

primary table key

Each [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") has a primary [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") that is either a user-defined key or the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"). In [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), the primary key is a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") and in [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), the primary key is a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"). Both table types are [key tables](javascript:call_link\('abenkey_table_glosry.htm'\) "Glossary Entry") for which key access is optimized, and the primary key thus has its own administration. The key fields of these tables are write-protected when individual lines are accessed. [Standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") also have a primary key, but the corresponding access is not optimized, there is no separate key administration, and the key fields are not write-protected.

[→ More about](javascript:call_link\('abenitab_key_primary.htm'\))