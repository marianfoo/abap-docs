  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-6.htm) →  [News for ABAP Release 6.20](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-620.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Structure%20Enhancements%20in%20ABAP%20Release%206.20%2C%20ABENNEWS-620-STRUCTURES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Structure Enhancements in ABAP Release 6.20

Since ABAP release 3.0, customers have been able to make changes to SAP's ABAP Dictionary structures and tables using [customizing includes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencustomizing_include_glosry.htm "Glossary Entry") or appends. Changes like this, however, can cause problems in programs with active [Unicode checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunicode_check_glosry.htm "Glossary Entry"). For example, if a character-like-only structure is enhanced, it can lose its character-like nature and hence its fragment view is changed.

In ABAP release 6.20, it has therefore been made possible to classify dictionary structures and tables, so that problems caused by structure enhancements can be easily recognized and dealt with. In the ABAP programming checks, this classification is used to flag up all places in the source code that can cause problems in the context of structure enhancements. These problems are due to syntax errors or modified program behavior caused by structure enhancements. The dictionary categories and their effect in ABAP programs are described in [Enhancement Category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures_enh_cat.htm).