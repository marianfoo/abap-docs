  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP Dictionary in Release 7.55

[1\. Internal Handling of the Name Table](#!ABAP_MODIFICATION_1@1@)

Modification 1

Internal Handling of the Name Table

The internal handling of the [name table (nametab)](javascript:call_link\('abenname_table_glosry.htm'\) "Glossary Entry") that stores the runtime objects of data types in the ABAP Dictionary has changed.

This has the following consequences:

-   The internal ABAP statement [EXPORT NAMETAB](javascript:call_link\('abapexport_nametab.htm'\)) cannot be used any more and leads to a runtime error.

-   The internal ABAP statement [IMPORT NAMETAB](javascript:call_link\('abapimport_nametab.htm'\)) is still partly supported for reasons of downward compatibility. Any access to entries for [DDIC table types](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry") leads to a runtime error. Any other access leads to errors from [ATC](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry").

-   The former native database table DDNTF for separate nametab field descriptions is not supported any more and will be deleted.