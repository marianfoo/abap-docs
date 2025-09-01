# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Type Reference

-   [Obsolete use of LIKE](javascript:call_link\('abenlike_obsolete.htm'\))

Continue
[LIKE, obsolete](javascript:call_link\('abenlike_obsolete.htm'\))


### abenlike_obsolete.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Type Reference](javascript:call_link\('abenobsolete_typing.htm'\)) → 

LIKE, obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can be used to reference [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structures in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") and their components, as well as the properties of data objects. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following ways of using LIKE:

-   in the declarative statements [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), and so on.

-   in [complete typings](javascript:call_link\('abentyping_complete.htm'\))

-   in the statement [PARAMETERS](javascript:call_link\('abapparameters_type.htm'\))

If there is a data object called dtype in a local context, then this object hides the data type from ABAP Dictionary.

Hints

-   The addition LIKE should only be used to refer to data objects.

-   It is not possible to make a LIKE reference to a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity. It is possible, however, to make a LIKE reference to a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

-   Always use the addition TYPE to refer to data types.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.
