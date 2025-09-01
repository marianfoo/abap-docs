# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) → 

Obsolete Type Reference

-   [Obsolete use of LIKE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlike_obsolete.htm)

Continue
[LIKE, obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlike_obsolete.htm)


### abenlike_obsolete.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Type Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_typing.htm) → 

LIKE, obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can be used to reference [flat](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_glosry.htm "Glossary Entry") structures in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and their components, as well as the properties of data objects. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following ways of using LIKE:

-   in the declarative statements [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata.htm), and so on.

-   in [complete typings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_complete.htm)

-   in the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapparameters_type.htm)

If there is a data object called dtype in a local context, then this object hides the data type from ABAP Dictionary.

Hints

-   The addition LIKE should only be used to refer to data objects.

-   It is not possible to make a LIKE reference to a [CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") entity. It is possible, however, to make a LIKE reference to a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

-   Always use the addition TYPE to refer to data types.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.
