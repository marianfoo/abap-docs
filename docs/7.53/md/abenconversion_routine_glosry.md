---
title: "conversion_routine_glosry"
description: |
  conversion_routine_glosry - ABAP 7.53 language reference documentation
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_routine_glosry.htm"
abapFile: "abenconversion_routine_glosry.htm"
keywords: ["do", "try", "abenconversion", "routine", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

conversion routine

Also known as conversion exit. A conversion routine consists of two [function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_module_glosry.htm "Glossary Entry") with the naming convention CONVERSION\_EXIT\_.....\_INPUT*|*OUTPUT and can be assigned directly to a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") or a [domain](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendomain_glosry.htm "Glossary Entry"). When input and output is produced in these dynpro fields or when the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) and [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) are used, the function modules perform the conversions implemented there.

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_exits.htm)