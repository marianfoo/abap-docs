# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

---
title: "Obsolete Type Reference"
description: |
  -   Obsolete use of LIKE(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlike_obsolete.htm) LIKE - obsolete(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlike_obsolete.htm)
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_typing.htm"
abapFile: "abenobsolete_typing.htm"
keywords: ["do", "abenobsolete", "typing"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) → 

Obsolete Type Reference

-   [Obsolete use of LIKE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlike_obsolete.htm)

Continue
[LIKE - obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlike_obsolete.htm)


### abenlike_obsolete.htm

---
title: "LIKE - obsolete"
description: |
  Obsolete Syntax ... LIKE dtype ... Effect Outside of classes, the addition LIKE can also be used to refer to flat structures(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm 'Glossary Entry'), database tables(https://help.sap.com/doc/abapdocu_753_index_htm
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlike_obsolete.htm"
abapFile: "abenlike_obsolete.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenlike", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Type Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_typing.htm) → 

LIKE - obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can also be used to refer to [flat structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry"), [database tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_table_glosry.htm "Glossary Entry"), or [classic views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclassical_view_glosry.htm "Glossary Entry") in ABAP Dictionary, as well as to their components. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following ways of using LIKE:

-   in the declarative statements [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm), and so on.

-   in [complete typings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_complete.htm)

-   in the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_type.htm)

If there is a data object called dtype in a local context, then this object obscures the data type from ABAP Dictionary.

Notes

-   Use the addition LIKE only to refer to data objects.

-   It is not possible to make a LIKE reference to a [CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") entity. It is possible, however, to make a LIKE reference to a [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry").

-   Always use the addition TYPE to refer to data types.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.
