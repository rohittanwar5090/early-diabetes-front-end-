import Head from 'next/head'
import NavBar from '../components/Navbar'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Diabetes Prediction App</title>
      </Head>
      <main>
        <NavBar />
      </main>

      <section className='max-w-5xl mx-auto h-[90vh]'>
        <div className='absolute top-0 right-0 botton-0 left-0 -z-10 '>
          <img className='bg-opacity-50 ' src="bg1.jpg" />
        </div>
        <h1 className='text-5xl font-bold text-center my-10 text-white'>Early Stage Diabetes Prediction </h1>
        <p className='font-bold text-xl text-white'>Diabetes is a serious and common disease that affects the entire world's population. Although this sickness was once considered rare, its exponential rise has caused it to wreak havoc and mayhem in the current circumstances.
          Diabetes mellitus, or diabetes, is a metabolic condition characterised by excessive blood sugar levels.
          <br />
          Insulin transports sugar from the bloodstream into your cells, where it is stored or used for energy. Your body either doesn't generate enough insulin or can't use the insulin it does make efficiently if you have diabetes.In 2014, 8.5% of adults aged 18 years and older had diabetes. In 2019, diabetes was the direct cause of 1.5 million deaths and 48% of all deaths due to diabetes occurred before the age of 70 years.<br />
          Between 2000 and 2016, there was a 5% increase in premature mortality rates (i.e. before the age of 70) from diabetes.
          <br />
          In high-income countries the premature mortality rate due to diabetes decreased from 2000 to 2010 but then increased in 2010-2016. In lower-middle-income countries, the premature mortality rate due to diabetes increased across both periods.
          Diabetes, often known as diabetes mellitus, is a disease that affects how your body processes blood sugar.
          <br />
          Insulin deficiency and poor insulin utilization occur when the pancreas does not create enough insulin or when the human body does not use the insulin that is produced.<br />
          Diabetes is one of the deadly and a common disease among the general population of world. A rare condition back in the historic period but the exponential growth of this ailment has lead it to wreak havoc and mayhem in the current scenario.
        </p>
        <div className='flex justify-center'>
          <button onClick={() => router.push("/predictor")} className="bg-blue-600 text-white rounded-md p-2 ">Predict Diabetes</button>
        </div>

      </section>



    </div>
  )
}
