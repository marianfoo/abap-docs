---
title: "TRUNCATE DATASET - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptruncate.htm) Syntax TRUNCATE DATASET dset AT CURRENT POSITIONPOSITION pos. Effect Sets the end of file of the file specified in dset to the position specified after AT. Additions -   CURRENT POSITION Sets the
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptruncate_dataset_shortref.htm"
abapFile: "abaptruncate_dataset_shortref.htm"
keywords: ["do", "if", "data", "abaptruncate", "dataset", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  T

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TRUNCATE%20DATASET%2C%20ABAPTRUNCATE_DATASET_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TRUNCATE DATASET - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptruncate.htm)

Syntax

TRUNCATE DATASET dset AT *{*CURRENT POSITION*}**|**{*POSITION pos*}*.

Effect

Sets the end of file of the file specified in dset to the position specified after AT.

Additions   

-   CURRENT POSITION
    Sets the end of file to the current file pointer.
-   POSITION pos
    Sets the end of file to the position specified in pos.