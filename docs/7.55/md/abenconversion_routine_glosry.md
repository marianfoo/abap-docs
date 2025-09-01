---
title: "conversion_routine_glosry"
description: |
  conversion_routine_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm"
abapFile: "abenconversion_routine_glosry.htm"
keywords: ["do", "try", "abenconversion", "routine", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

conversion routine

Also referred to as a conversion exit. A conversion routine consists of two [function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_module_glosry.htm "Glossary Entry") with the naming convention CONVERSION\_EXIT\_.....\_INPUT*|*OUTPUT and can be assigned directly to a [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") or a [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendomain_glosry.htm "Glossary Entry"). The function modules execute the conversions implemented in these dynpro fields and also in the statements [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) and [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm) for input and output.

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_exits.htm)