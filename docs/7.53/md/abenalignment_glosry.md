  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

alignment

Some [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry"), such as [numeric data types](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry") (other than p and the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types), have specific alignment requirements that depend on the platform in question. [Fields](javascript:call_link\('abenfield_glosry.htm'\) "Glossary Entry") in the memory that have one of these [types](javascript:call_link\('abentype_glosry.htm'\) "Glossary Entry") must start at an address that is divisible by 4, 8, or 16. In the character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by the programming language ABAP, [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") with [character-like data types](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry") are also placed in memory addresses that can be divided by two. In a [structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") or [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry"), the [component](javascript:call_link\('abencomponent_glosry.htm'\) "Glossary Entry") with the highest alignment requirement determines the alignment of the entire structure. [Alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") may occur before or after components with alignment requirements.

[→ More](javascript:call_link\('abenalignment.htm'\))