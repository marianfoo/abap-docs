  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

alignment

Some [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") are subject to specific alignments dictated by the platform in question. [Fields](javascript:call_link\('abenfield_glosry.htm'\) "Glossary Entry") in the memory that have one of these [types](javascript:call_link\('abentype_glosry.htm'\) "Glossary Entry") must start at an address that is divisible by 2, 4, 8, or 16. In a [structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") or [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry"), the [component](javascript:call_link\('abencomponent_glosry.htm'\) "Glossary Entry") with the highest alignment requirement determines the alignment of the entire structure. [Alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") may occur before or after components with alignment requirements.

[→ More](javascript:call_link\('abenalignment.htm'\))