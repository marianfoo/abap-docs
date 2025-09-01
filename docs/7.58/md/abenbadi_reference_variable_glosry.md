---
title: "BAdI reference variable"
description: |
  Special object reference variable(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_refer_variable_glosry.htm 'Glossary Entry') that is declared with reference to a BAdI(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_glosry.htm 'Glossary Entry') and is us
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_reference_variable_glosry.htm"
abapFile: "abenbadi_reference_variable_glosry.htm"
keywords: ["do", "if", "try", "method", "class", "abenbadi", "reference", "variable", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20BAdI%20reference%20variable%2C%20ABENBADI_REFERENCE_VARIABLE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

BAdI reference variable

Special [object reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") that is declared with reference to a [BAdI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_glosry.htm "Glossary Entry") and is used to access the associated [BAdI object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_object_glosry.htm "Glossary Entry"). BAdI reference variables are supplied with a [BAdI reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_reference_glosry.htm "Glossary Entry") using [GET BADI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_badi.htm) and are only used in [CALL BADI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_badi.htm) to call [BAdI methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_method_glosry.htm "Glossary Entry"). Technically, BAdI reference variables are [class reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") of the [static type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_type_glosry.htm "Glossary Entry") of a concrete [BAdI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_class_glosry.htm "Glossary Entry") class, or of its abstract superclass CL\_BADI\_BASE.