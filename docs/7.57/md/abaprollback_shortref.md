---
title: "ROLLBACK WORK - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) Syntax ROLLBACK WORK. Effect Ends an SAP LUW(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_glosry.htm 'Glossary Entry'), executing the subroutines registered using PERFORM ON ROLLBACK
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback_shortref.htm"
abapFile: "abaprollback_shortref.htm"
keywords: ["update", "do", "if", "try", "abaprollback", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ROLLBACK WORK, ABAPROLLBACK_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

ROLLBACK WORK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm)

Syntax

ROLLBACK WORK.

Effect

Ends an [SAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_glosry.htm "Glossary Entry"), executing the subroutines registered using PERFORM ON ROLLBACK and discarding the subroutines and [update function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") registered using PERFORM ON COMMIT or CALL FUNCTION IN UPDATE TASK.