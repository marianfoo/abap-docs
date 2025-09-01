# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Type Reference

-   [Obsolete use of LIKE](javascript:call_link\('abenlike_obsolete.htm'\))

Continue
[LIKE - obsolete](javascript:call_link\('abenlike_obsolete.htm'\))


### abenlike_obsolete.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Type Reference](javascript:call_link\('abenobsolete_typing.htm'\)) → 

LIKE - obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can also be used to refer to [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"), [database tables](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry"), or [classic views](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, as well as to their components. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following ways of using LIKE:

-   in the declarative statements [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), and so on.

-   in [complete typings](javascript:call_link\('abentyping_complete.htm'\))

-   in the statement [PARAMETERS](javascript:call_link\('abapparameters_type.htm'\))

If there is a data object called dtype in a local context, then this object obscures the data type from ABAP Dictionary.

Notes

-   The addition LIKE should only be used to refer to data objects.

-   It is not possible to make a LIKE reference to a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity. It is possible, however, to make a LIKE reference to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry").

-   Always use the addition TYPE to refer to data types.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.
