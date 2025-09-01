---
title: "Obsolete Syntax"
description: |
  ... MAJOR-ID id1 MINOR-ID id2 ... Effect Outside of classes, the addition ID of the statement IMPORT(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_data_cluster.htm) FROM DATABASE(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_medium.htm) can
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_obsolete_id.htm"
abapFile: "abapimport_obsolete_id.htm"
keywords: ["do", "if", "try", "class", "data", "abapimport", "obsolete"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster_obsolete.htm) → 

IMPORT, obs\_id

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_shortref.htm)

Obsolete Syntax

... MAJOR-ID id1 *\[*MINOR-ID id2*\]* ...

Effect

Outside of classes, the addition ID of the statement [IMPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_data_cluster.htm) [FROM DATABASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_medium.htm) can be replaced by these additions when database tables are imported. When id1 and id2 are specified, the same rules apply as to id.

A [data cluster](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster_glosry.htm "Glossary Entry") is imported whose ID in the first part matches the value of id1. If MINOR-ID id2 is also specified, the data cluster is imported whose ID in the second part, that is, at the positions after the number of characters specified in id1, is greater than or equal to the value in id2. The search is canceled once the first match is found.

Hints

-   When using id2, it should be noted that this data object must either only contain digits or only letters, since mixed forms can produce differing search results depending on the platform.
-   MAJOR-ID and MINOR-ID are obsolete, since the specified ID is not unique. The ID can be created in the program instead.

Example

If a data cluster with the ID "Sausage" was exported, this statement is found when MAJOR-ID "Sau" is specified. It is also found if "ab" is specified as MINOR-ID, but it is not found if "yz" is specified as MINOR-ID.