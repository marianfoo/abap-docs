# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

---
title: "Obsolete Type Reference"
description: |
  -   Obsolete use of LIKE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm) LIKE, Obsolete(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm)
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_typing.htm"
abapFile: "abenobsolete_typing.htm"
keywords: ["do", "if", "abenobsolete", "typing"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Type%20Reference%2C%20ABENOBSOLETE_TYPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Type Reference

-   [Obsolete use of LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm)

Continue
[LIKE, Obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm)


### abenlike_obsolete.htm

---
title: "LIKE, Obsolete"
description: |
  Obsolete Syntax ... LIKE dtype ... Effect Outside of classes, the addition LIKE can be used to refer to flat(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm 'Glossary Entry') structures in the ABAP Dictionary(https://help.sap.com/doc/abapdocu_latest_index_htm/
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm"
abapFile: "abenlike_obsolete.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenlike", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Type Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_typing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LIKE%2C%20Obsolete%2C%20ABENLIKE_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LIKE, Obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can be used to refer to [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") structures in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and their components, as well as the properties of data objects. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following uses of LIKE:

-   in the declarative statements [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm), and so on.
-   in [complete typings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_complete.htm)
-   in the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapparameters_type.htm)

If there is a data object with the name dtype in a local context, then this object hides the data type from the ABAP Dictionary.

Hints

-   The addition LIKE should only be used to refer to data objects.
-   It is neither possible to make a LIKE reference to a [CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") entity, nor to make a LIKE reference to a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") ([obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_obsolete.htm)).
-   For a reference to data types, the addition TYPE should always be used.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.
