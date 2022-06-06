import React from 'react'
import Model from '../components/Model'
import NavBar from '../components/Navbar'

function models() {
  return (
    <div>

      <NavBar />
      <Model
        heading='Logistic Regression '
        text='Logistic regression is a statistical analysis method used to predict a data value based on prior observations of a data set. It is the go-to method for binary classification problems (problems with two class values). A logistic regression model predicts a dependent data variable by analyzing the relationship between one or more existing independent variables. 
        Logistic regression predicts the output of a categorical dependent variable. Therefore the outcome must be a categorical or discrete value. It can be either Yes or No, 0 or 1, true or False, etc. but instead of giving the exact value as 0 and 1, it gives the probabilistic values which lie between 0 and 1.'
        image='lr.png'
      />
      <Model
        heading='XGBoost '
        text='XGBoost is an algorithm that has recently been dominating applied machine learning and Kaggle competitions for structured or tabular data. XGBoost    is an implementation of gradient boosted decision trees designed forspeedand performance. XGBoost is an optimized distributed gradient boosting library designed to be highly efficient, flexible and portable. It implements machine learning algorithms under the Gradient Boosting framework.
        While XGBoost model often achieves higher accuracy than a single decision tree, it sacrifices the intrinsic interpretability of decision trees.  For example, following the path that a decision tree takes to make its decision is trivial and self-explained, but following the paths of hundreds or thousands of trees is much harder. To achieve both performance and interpretability, some model compression techniques allow transforming an XGBoost into a single "born-again" decision tree that approximates the same decision function.'
        image='xg.png'
      />
      <Model
        heading='Random Forest '
        text='Random forest is a supervised learning algorithm that’s used to solve regression and classification problems. Similarly, random forest algorithm creates decision trees on data samples and then gets the prediction from each of them.A random forest is a machine learning technique. It utilizes ensemble learning,which is a technique that combines many classifiers to provide solutions to complexproblems.
        Decision trees are a popular method for various machine learning tasks. Tree learning "come[s] closest to meeting the requirements for serving as an off-the-shelf procedure for data mining", say Hastie et al., "because it is invariant under scaling and various other transformations of feature values, is robust to inclusion of irrelevant features, and produces inspectable models. However, they are seldom accurate".'
        image='forest.svg'
      />
      <Model
        heading='Support Vector Classifier '
        text=' The Support Vector Machine, or SVM, is a popular Supervised Learning technique that may be used to solve both classification and regression issues. However, it is mostly utilized in Machine Learning for Classification difficulties.. A hyperplane is the name for the optimal choice boundary. 
       The extreme points/vectors that assist create the hyperplane are chosen via SVM. Support vectors are the extreme instances, and the algorithm is called a Support Vector Machine.
       The goal of the SVM algorithm is to create the best line or decision boundary that can segregate n-dimensional space into classes so that we can easily put the new data point in the correct category in the future. This best decision boundary is called a hyperplane.'
        image='svc.png'
      />
      <Model
        heading='K-Nearest Neighbor '
        text=' The K-Nearest Neighbor algorithm is based on the Supervised Learning technique and is one of the most basic Machine Learning algorithms. 
       The K-NN algorithm assumes that the new case/data and existing cases are similar and places the new case in the category that is most similar to the existing categories.The K-NN method stores all available data and classifies a new data point based on its similarity to the existing data. This means that new data can be quickly sorted into a well-defined category using the K-NN method. The K-NN algorithm can be used for both regression and classification, but it is more commonly utilized for classification tasks. 
       K-NN is a non-parametric algorithm, which means it does not make any assumption on underlying data.
It is also called a lazy learner algorithm because it does not learn from the training set immediately instead it stores the dataset and at the time of classification, it performs an action on the dataset.'
        image='knn1.png'
      />
      <Model
        heading='Naive Bayes '
        text='The Nave Bayes method is a supervised learning technique for addressing classification issues that is based on the Bayes theorem. 
       It is mostly utilized in text classification tasks that require a large training dataset. 
       Naïve Bayes Classifier is one of the simple and most effective Classification algorithms which helps in building the fast machine learning models that can make quick predictions.
        It is a probabilistic classifier, which means it predicts on the basis of the probability of an object.
          Some popular examples of Naïve Bayes Algorithm are spam filtration, Sentimental analysis, and classifying articles.'
        image='nb.png'
      />
      <Model
        heading='Decision Tree '
        text='Decision Tree is a supervised learning technique that can be applied to classification and regression problems, however it is most commonly employed to solve classification problems. Internal nodes represent dataset attributes, branches represent decision rules, and each leaf node provides the conclusion in this tree-structured classifier.The Decision Node and the Leaf Node are the two nodes of a Decision tree. 
        Decision tree is the most powerful and popular tool for classification and prediction. A Decision tree is a flowchart like tree structure, where each internal node denotes a test on an attribute, each branch represents an outcome of the test, and each leaf node (terminal node) holds a class label. '
        image='decision.png'
      />

    </div>
  )
}

export default models