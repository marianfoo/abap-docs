  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

Primary Table Key

Each [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") has a primary [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") that is either a self-defined key or the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"). For [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), the primary key is a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry"), for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), the primary key is a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"). Both of these table types are [key tables](javascript:call_link\('abenkey_table_glosry.htm'\) "Glossary Entry") for which key access is optimized and the primary key thus has its own administration. The key fields of these tables are write-protected when you access individual rows. [Standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") also have a primary key, but the corresponding access is not optimized, there is no separate key administration, and the key fields are not write-protected.

[→ More](javascript:call_link\('abenitab_key_primary.htm'\))