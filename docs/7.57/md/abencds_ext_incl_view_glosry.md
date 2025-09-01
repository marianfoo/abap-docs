---
title: "cds_ext_incl_view_glosry"
description: |
  cds_ext_incl_view_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ext_incl_view_glosry.htm"
abapFile: "abencds_ext_incl_view_glosry.htm"
keywords: ["do", "if", "try", "data", "abencds", "ext", "incl", "view", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: extension include view, ABENCDS_EXT_INCL_VIEW_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

extension include view

Expression used in the context of [C0 developer extensibility](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_glosry.htm "Glossary Entry"). [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") that has exactly one [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_source_glosry.htm "Glossary Entry") defined after FROM, which is a [DDIC database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_db_table_glosry.htm "Glossary Entry"). An extension include view does not define any [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry").

In a typical C0 developer extension scenario, not each single CDS entity is defined as [released API](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry"), only a few dedicated extension points. An extension include view represents a typical extension point that includes additional fields from a database table in the data model via an extension.

[More about CDS entity extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_extension.htm)