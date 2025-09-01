---
title: "DELETE FROM - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_cluster.htm) Syntax DELETE FROM  MEMORY ID id  DATABASE      dbtab(ar) CLIENT cl ID id  SHARED MEMORY dbtab(ar) CLIENT cl ID id  SHARED BUFFER dbtab(ar) CLIENT cl
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_from_shortref.htm"
abapFile: "abapdelete_from_shortref.htm"
keywords: ["delete", "do", "if", "try", "data", "abapdelete", "from", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DELETE FROM, ABAPDELETE_FROM_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

DELETE FROM - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_cluster.htm)

Syntax

DELETE FROM *{* *{*MEMORY ID id*}*
            *|* *{*DATABASE      dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED MEMORY dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED BUFFER dbtab(ar) *\[*CLIENT cl*\]* ID id*}* *}*.

Effect

Deletes the [data cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") of the ID specified in id.

Additions   

-   MEMORY
    Specifies a data cluster in the [ABAP memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_memory_glosry.htm "Glossary Entry").
-   DATABASE dbtab(ar) *\[*CLIENT cl*\]*
    Specifies a data cluster in a database table dbtab, in the range ar and with a [client ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry") cl.
-   *{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* dbtab(ar) *\[*CLIENT cl*\]*
    Specifies a data cluster stored in an application buffer in the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry") addressed using the name of a database table dbtab, an area ar, and a client ID cl. These two alternatives have different displacement mechanisms.