---
title: "field_exit_glosry"
description: |
  field_exit_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield_exit_glosry.htm"
abapFile: "abenfield_exit_glosry.htm"
keywords: ["do", "if", "try", "data", "abenfield", "exit", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: field exit, ABENFIELD_EXIT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

field exit

Obsolete [customer exit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencustomer_exit_glosry.htm "Glossary Entry") that can be linked with [DDIC data elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_element_glosry.htm "Glossary Entry") in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") in customer systems. If a [dynpro field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_glosry.htm "Glossary Entry") is defined with reference to such a data element, a function module named FIELD\_EXIT\_dtel is called during the data transport from the dynpro to the ABAP program at the event [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry"). Here, dtel is the name of the data element. The value of the dynpro field can be modified in the function module. The function module of a field exit cannot be debugged at present.