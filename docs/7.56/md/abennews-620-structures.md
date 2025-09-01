  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-6.htm) →  [News for Release 6.20](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-620.htm) → 

Structure Enhancements in Release 6.20

Since Release 3.0, customers have been able to make changes to SAP's ABAP Dictionary structures and tables using customizing includes or appends. Changes like this, however, can cause problems in programs with active [Unicode checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunicode_check_glosry.htm "Glossary Entry"). For example, if a character-like-only structure is enhanced, it can lose its character-like nature and hence its fragment view is changed.

In Release 6.20, it has therefore been made possible to classify dictionary structures and tables, so that problems caused by structure enhancements can be easily recognized and dealt with. In the ABAP programming checks, this classification is used to flag up all places in the source code that can cause problems in the context of structure enhancements. These problems are due to syntax errors or modified program behavior caused by structure enhancements. The dictionary categories and their effect in ABAP programs are described in [Enhancement Category](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_enh_cat.htm).