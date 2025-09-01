  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

alignment

Most [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") are subject to specific alignment requirements depending on the current platform. In memory, [fields](javascript:call_link\('abenfield_glosry.htm'\) "Glossary Entry") of this [type](javascript:call_link\('abentype_glosry.htm'\) "Glossary Entry") must start at addresses that are divisible by 2, 4, 8, or 16. In a [structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") or [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry"), the [component](javascript:call_link\('abencomponent_glosry.htm'\) "Glossary Entry") with the highest alignment requirement determines the alignment of the entire structure, where [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") are created before or after components with alignment requirements.

[→ More about](javascript:call_link\('abenalignment.htm'\))